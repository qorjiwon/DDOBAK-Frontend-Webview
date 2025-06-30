"use client";

import React, { useEffect, useState } from 'react';
import { fetchContractOcrResult } from '@/api/api';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function OcrCorrectionPage() {
  const [blocks, setBlocks] = useState<string[]>([]);
  const [editedBlocks, setEditedBlocks] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchContractOcrResult();
        // Assume API returns text blocks array at res.data.textBlocks
        const textBlocks = res.data?.textBlocks ?? [];
        setBlocks(textBlocks);
        setEditedBlocks(textBlocks);
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'OCR 결과를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-gray-500">로딩 중...</div>;
  }
  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen py-4">
      {/* Header */}
      <div className="flex items-center px-4 mb-4">
        <Link href="/" className="p-2">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="flex-1 text-lg font-semibold">인식된 텍스트를 확인하세요</h1>
      </div>

      {/* Editable blocks list */}
      <div className="flex-1 overflow-y-auto px-4 space-y-3 mb-4">
        {editedBlocks.map((text, idx) => (
          <textarea
            key={idx}
            value={text}
            onChange={e => {
              const updated = [...editedBlocks];
              updated[idx] = e.target.value;
              setEditedBlocks(updated);
            }}
            className="w-full bg-white rounded-lg p-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={3}
          />
        ))}
      </div>

      {/* Action Button */}
      <div className="px-4">
        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium"
          onClick={() => console.log('Edited blocks:', editedBlocks)}
        >
          분석 시작하기
        </button>
      </div>
    </div>
  );
}