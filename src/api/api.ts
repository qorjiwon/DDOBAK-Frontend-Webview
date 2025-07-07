import type { ContractAnalysisResponse, ContractOcrResponse } from '@/types/api';

const API_BASE_PATH = process.env.NEXT_PUBLIC_API_BASE_URL!;
const X_REQUEST_ID = process.env.NEXT_PUBLIC_X_REQUEST_ID!;
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