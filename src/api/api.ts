import type { ContractAnalysisResponse } from '@/types/api';

const API_BASE_PATH = process.env.NEXT_PUBLIC_API_BASE_URL!;

/**
 * 계약서 분석 API 호출
 * @returns ContractAnalysisResponse 타입의 전체 응답 래퍼
 */
export async function fetchContractAnalysis(): Promise<ContractAnalysisResponse> {
  const res = await fetch(`${API_BASE_PATH}/contract/analysis/result`, {
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