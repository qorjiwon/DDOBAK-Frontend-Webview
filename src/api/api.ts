import type { ContractAnalysisResponse, ContractOcrResponse, CreateAnalysisRequest } from '@/types/api';

const API_BASE_PATH = process.env.NEXT_PUBLIC_API_BASE_URL!;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;

export async function fetchContractAnalysis(contractId: string, analysisId: string): Promise<ContractAnalysisResponse> {

  const res = await fetch(`${API_BASE_PATH}/contract/${contractId}/analysis/${analysisId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
  });

  if (!res.ok) {
    throw new Error(`Network error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  // 비즈니스 레벨 에러 체크
  if (!json.success) {
    throw new Error(`API error [code=${json.code}]: ${json.message}`);
  }

  return json;
}

export async function fetchContractOcrResult(contId: string): Promise<ContractOcrResponse> {
  const res = await fetch(`${API_BASE_PATH}/contract/ocr/${contId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Network error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();

  // 비즈니스 레벨 에러 체크
  if (!json.success) {
    throw new Error(`API error [code=${json.code}]: ${json.message}`);
  }

  return json;
}

export async function createContractAnalysis(
  contractId: string,
  ocrSucceeded: boolean
): Promise<ContractAnalysisResponse> {
  const payload: CreateAnalysisRequest = {
    contractId,
    ocrSucceeded: ocrSucceeded.toString(),
  };

  const res = await fetch(`${API_BASE_PATH}/contract/analysis`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Network error: ${res.status} ${res.statusText}`);
  }

  const json: ContractAnalysisResponse = await res.json();

  // 비즈니스 레벨 에러 체크
  if (!json.success) {
    throw new Error(`API error [code=${json.code}]: ${json.message}`);
  }

  return json;
}

export async function updateContractOcr(contractId: string, blockId: string, element: string) {
  try {
    const response = await fetch(`${API_BASE_PATH}/contract/ocr/${contractId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        id: blockId,
        element: element,
      })
    });

    if (!response.ok) {
      throw new Error('OCR 결과 업데이트 실패');
    }

    return await response.json();
  } catch (error) {
    console.error('OCR 업데이트 오류:', error);
    throw error;
  }
};