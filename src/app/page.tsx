import Link from 'next/link';

const contractId = process.env.NEXT_PUBLIC_ContractId!;
const analysisId = process.env.NEXT_PUBLIC_AnalysisId!;

export default function Home() {

  return (
    <div className="flex flex-col gap-5 justify-center bg-gray-50 min-h-screen items-center">
      <Link
        href={`/ocr?contId=${contractId}`}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        ocr 결과 페이지
      </Link>
      <Link
        href={`/ocrOrigin?contId=${contractId}`}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        ocr 원본 페이지
      </Link>
      <Link
        href={`/analysis?contId=${contractId}&analysisId=${analysisId}`}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        계약서 분석으로 이동
      </Link>
    </div>
  );
}