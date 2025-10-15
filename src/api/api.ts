const API_BASE_PATH = process.env.NEXT_PUBLIC_API_BASE_URL!;
if (!API_BASE_PATH) {
  throw new Error('ENV missing: NEXT_PUBLIC_API_BASE_URL');
}

function getCsrfHeader(): Record<string, string> {
  if (typeof document === 'undefined') return {};
  const meta = document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement | null;
  const token = meta?.content?.trim();
  return token ? { 'X-CSRF-Token': token } : {};
}

function isLocalRuntime(): boolean {
  if (typeof window !== 'undefined') {
    return /^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);
  }
  const isProd = process.env.NODE_ENV === 'production';
  const onVercel = !!process.env.VERCEL;
  return !isProd && !onVercel;
}

const LOCAL_API_KEY = process.env.NEXT_PUBLIC_API_KEY;

async function apiFetch<T = unknown>(
  path: string,
  init: RequestInit & { json?: unknown } = {}
): Promise<T> {
  const { json, headers: initHeaders, body: initBody, ...rest } = init;

  // 1) 헤더 구성
  const headers: Record<string, string> = {
    ...getCsrfHeader(),
    ...(initHeaders as Record<string, string> | undefined),
  };

  // 2) body 선택 (json 우선)
  const usingJson = json !== undefined;
  const body: BodyInit | null | undefined = usingJson
    ? (JSON.stringify(json) as BodyInit)
    : initBody;

  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;
  if (usingJson) {
    headers['Content-Type'] = headers['Content-Type'] ?? 'application/json';
  } else if (isFormData) {
    delete headers['Content-Type'];
  } else {
    headers['Content-Type'] = headers['Content-Type'] ?? 'application/json';
  }

  if (isLocalRuntime() && LOCAL_API_KEY && !('Authorization' in headers)) {
    headers.Authorization = `Bearer ${LOCAL_API_KEY}`;
  }

  const res = await fetch(`${API_BASE_PATH}${path}`, {
    ...rest,
    credentials: 'include',
    headers,
    body,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Network error: ${res.status} ${res.statusText}${text ? ` - ${text}` : ''}`);
  }

  const contentType = res.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return res.blob() as unknown as T;
  }

  const jsonData = (await res.json()) as unknown;

  if (
    typeof jsonData === 'object' &&
    jsonData !== null &&
    'success' in jsonData &&
    Object.prototype.hasOwnProperty.call(jsonData, 'success') &&
    !(jsonData as { success: boolean }).success
  ) {
    const j = jsonData as { code?: string; message?: string };
    throw new Error(`API error [code=${j.code ?? 'UNKNOWN'}]: ${j.message ?? 'Unknown API error'}`);
  }

  return jsonData as T;
}

// ----------------- 타입 정의 -----------------

export interface ContractAnalysisResponse {
  success: boolean;
  code?: string;
  message?: string;
  data: unknown;
}
export interface ContractOcrResponse {
  success: boolean;
  code?: string;
  message?: string;
  data: unknown;
}
export interface CreateAnalysisRequest {
  contractId: string;
  ocrSucceeded: string;
}

// ----------------- API 함수 -----------------

export async function fetchContractAnalysis(
  contractId: string,
  analysisId: string
): Promise<ContractAnalysisResponse> {
  return apiFetch<ContractAnalysisResponse>(
    `/contract/${contractId}/analysis/${analysisId}`,
    { method: 'GET' }
  );
}

export async function fetchContractOcrResult(
  contId: string
): Promise<ContractOcrResponse> {
  return apiFetch<ContractOcrResponse>(
    `/contract/ocr/${contId}`,
    { method: 'GET' }
  );
}

export async function createContractAnalysis(
  contractId: string,
  ocrSucceeded: boolean
): Promise<ContractAnalysisResponse> {
  const payload: CreateAnalysisRequest = {
    contractId,
    ocrSucceeded: String(ocrSucceeded),
  };

  return apiFetch<ContractAnalysisResponse>(`/contract/analysis`, {
    method: 'POST',
    json: payload,
  });
}

export async function updateContractOcr(
  contractId: string,
  blockId: string,
  element: string
): Promise<ContractOcrResponse> {
  return apiFetch<ContractOcrResponse>(`/contract/ocr/${contractId}`, {
    method: 'PATCH',
    json: { id: blockId, element },
  });
}
