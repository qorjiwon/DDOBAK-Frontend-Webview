import type { ContractAnalysisResponse } from '@/types/api';

const API_BASE_PATH = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function fetchContractAnalysis(): Promise<ContractAnalysisResponse> {
  const res = await fetch(`${API_BASE_PATH}/contract/${contractId}/analysis/${analysisId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Network error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json(); // as ContractAnalysisResponse

  // 비즈니스 레벨 에러 체크
  if (!json.success) {
    throw new Error(`API error [code=${json.code}]: ${json.message}`);
  }

  return json;
}

export async function fetchContractOcrResult(): Promise<ContractAnalysisResponse> {
  const res = await fetch(`${API_BASE_PATH}/contract/ocr/${contractId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Network error: ${res.status} ${res.statusText}`);
  }

  const json = await res.json(); // as ContractAnalysisResponse

  // 비즈니스 레벨 에러 체크
  if (!json.success) {
    throw new Error(`API error [code=${json.code}]: ${json.message}`);
  }

  return json;
}