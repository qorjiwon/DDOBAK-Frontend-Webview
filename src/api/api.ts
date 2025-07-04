import type { ContractAnalysisResponse, ContractOcrResponse } from '@/types/api';

const API_BASE_PATH = process.env.NEXT_PUBLIC_API_BASE_URL!;
const contractId = process.env.NEXT_PUBLIC_ContractId!;
const analysisId = process.env.NEXT_PUBLIC_AnalysisId!;

export async function fetchContractAnalysis(): Promise<ContractAnalysisResponse> {
  const res = await fetch(`${API_BASE_PATH}/contract/${contractId}/analysis/${analysisId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      'Content-Type': 'application/json',
      'X-Request-Id': 'asda',
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

export async function fetchContractOcrResult(): Promise<ContractOcrResponse> {
  const res = await fetch(`${API_BASE_PATH}/contract/ocr/${contractId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer  ${process.env.NEXT_PUBLIC_API_KEY}`,
      'Content-Type': 'application/json',
      'X-Request-Id': 'abcde-1234-fghij-5678-klmnop',
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