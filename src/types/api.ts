/**  
 * 공통 응답 래퍼 타입  
 * @template T data 필드에 담길 실제 DTO 타입  
 */
export interface ResponseDTO<T> {
  success: boolean;      // 요청 성공 여부
  code: number;          // 비즈니스 상태 코드 (state code)
  message: string;       // 사용자·개발자 참고용 메시지
  userMessage: string | null, // 사용자에게 보여줄 메시지
  data: T;               // 실제 응답 데이터
  timestamp: string;     // 응답 시각 ISO 8601 UTC 타임스탬프
  trace_id: string;      // 로그/디버깅용 추적 ID
}

/**  
 * 계약서 분석 결과 DTO  
 */
export interface ContractAnalysisDTO {
  originContent: string;       // 계약서 OCR 전문 텍스트
  summary: string;             // 계약서 대표 요약문
  analysisStatus: string;      // 분석 상태
  analysisDate: string;       // 분석 날짜
  toxicCount: number;          // 독소 조항 개수
  ddobakCommentary: {
    overallComment: string;    // 또박이 한마디
    warningComment: string;    // 주의 사항 요약
    advice: string;            // 또박이의 조언
  };
  toxics: Array<{
    title: string;             // 주의 조항 헤드라인
    clause: string;            // 독소 조항 문장
    reason: string;            // 독소 판단 근거
    reasonReference: string;   // 실제 법적 근거
    warnLevel: number;         // 위험 수준 (1~5 등급)
  }>;
}

export type ContractAnalysisResponse = ResponseDTO<ContractAnalysisDTO>;

export interface HtmlBlock {
  category: string; // html 태그
  element: string;  // HTML 개별 요소
  id: string;       // 각 요소의 고유 id
  tagIdx: number; // 태그 내 idx 정보
}

export interface ContractOcrHtml {
  pageIdx: number;
  htmlEntire: string;
  htmlArray: HtmlBlock[];
}

export type ContractOcrResponse = ResponseDTO<ContractOcrHtml>;

export interface CreateAnalysisRequest {
  contractId: string;
  ocrSucceeded: string; // API 스펙에 맞춰 문자열로 전송
}