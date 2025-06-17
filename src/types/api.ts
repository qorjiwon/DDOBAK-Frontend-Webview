/**  
 * 공통 응답 래퍼 타입  
 * @template T data 필드에 담길 실제 DTO 타입  
 */
export interface ResponseDTO<T> {
  success: boolean;      // 요청 성공 여부
  code: number;          // 비즈니스 상태 코드 (state code)
  message: string;       // 사용자·개발자 참고용 메시지
  data: T;               // 실제 응답 데이터
  timestamp: string;     // 응답 시각 ISO 8601 UTC 타임스탬프
  trace_id: string;      // 로그/디버깅용 추적 ID
}

/**  
 * 계약서 분석 결과 DTO  
 */
export interface ContractAnalysisDTO {
  originContent: string;       // OCR 전문 텍스트
  summary: string;             // 대표 요약문
  toxics: Array<{
    clause: string;            // 독소 조항 문장
    reason: string;            // 독소 판단 근거
    warnLevel: number;         // 위험 등급 (1~5)
  }>;
}

/**  
 * 실제 호출할 때 받을 타입  
 */
export type ContractAnalysisResponse =
  ResponseDTO<ContractAnalysisDTO>;