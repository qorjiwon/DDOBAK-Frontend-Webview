"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center bg-gray-50 min-h-screen items-center">
      <Link
        href="/ocr"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        ocr 결과 페이지
      </Link>
      <Link
        href="/ocrOrigin"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        ocr 원본 페이지
      </Link>
      <Link
        href="/analysis"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        계약서 분석으로 이동
      </Link>
    </div>
  );
}