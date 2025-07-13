import Link from 'next/link';

const contractId = process.env.NEXT_PUBLIC_ContractId!;
const analysisId = process.env.NEXT_PUBLIC_AnalysisId!;

export default function Home() {

  return (
    <div className="flex flex-col gap-5 justify-center bg-gray-50 min-h-screen items-center">
      <Link
        href={`/ocr?contId=${contractId}`}
        className="px-6 py-3 bg-[#1F79FF] text-white rounded-lg hover:bg-blue-700"
      >
        ocr 결과 페이지
      </Link>
      <Link
        href={`/ocrOrigin?contId=${contractId}`}
        className="px-6 py-3 bg-[#1F79FF] text-white rounded-lg hover:bg-blue-700"
      >
        ocr 원본 페이지
      </Link>
      <Link
        href={`/analysis?contId=${contractId}&analysisId=${analysisId}`}
        className="px-6 py-3 bg-[#1F79FF] text-white rounded-lg hover:bg-blue-700"
      >
        계약서 분석으로 이동
      </Link>
      <Link
        href={`/tips/1`}
        className="px-4 py-3 bg-[#1F79FF] text-sm text-white rounded-lg hover:bg-blue-700"
      >
        계약서 꿀팁 - 사회 초년생이 가장 많이 오해하는 계약 조항들
      </Link>
      <Link
        href={`/tips/2`}
        className="px-4 py-3 bg-[#1F79FF] text-sm text-white rounded-lg hover:bg-blue-700"
      >
        계약서 꿀팁 - 이런 문구, 독소 조항일 수 있어요!
      </Link>
      <Link
        href={`/tips/3`}
        className="px-4 py-3 bg-[#1F79FF] text-sm text-white rounded-lg hover:bg-blue-700"
      >
        계약서 꿀팁 - 첫 알바 근로계약서라면? 이런 조항을 주의하세요!
      </Link>
      <Link
        href={`/test`}
        className="px-4 py-3 bg-[#1F79FF] text-sm text-white rounded-lg hover:bg-blue-700"
      >
        테스트 페이지로 이동
      </Link>
    </div>
  );
}