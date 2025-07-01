"use client";

import React, { useEffect, useState } from 'react';
import { fetchContractOcrResult } from '@/api/api';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { ContractOcrHtml, HtmlBlock } from '@/types/api';

const tempOcrResult: ContractOcrHtml = {
  "pageIdx": 1,
  "htmlEntire": "<html><body>...</body></html>",
  "htmlArray": [
  ]
}
export default function OcrCorrectionPage() {
  const [blocks, setBlocks] = useState<HtmlBlock[]>(tempOcrResult.htmlArray);
  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchContractOcrResult();
        const data: ContractOcrHtml = res.data;
        setBlocks(data.htmlArray);
      } catch (err: any) {
        console.error(err);
        setError(err.message ?? "OCR 결과를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const adjustHeight = (el: HTMLTextAreaElement) => {
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  };

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen text-gray-500">
  //       로딩 중...
  //     </div>
  //   );
  // }
  // if (error) {
  //   return <div className="p-4 text-red-500">{error}</div>;
  // }

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen py-4">
      <div className="flex items-center px-4">
        <Link href="/" className="p-2">
          <ChevronLeft size={24} />
        </Link>
      </div>

      <h1 className="pl-6 my-9 text-[28px] font-semibold">인식된 텍스트를 확인하세요</h1>

      <div className="px-4 space-y-[10px] mb-4">
        {blocks.map((block, idx) => (
          <div
            key={block.id}
            className={
              editingIdx !== null && editingIdx !== idx ? 'opacity-30' : 'opacity-100'
            }
          >
            <textarea
              value={block.element}
              onChange={(e) => {
                const updated = [...blocks];
                updated[idx] = { ...updated[idx], element: e.target.value };
                setBlocks(updated);
                adjustHeight(e.target);
              }}
              onFocus={() => setEditingIdx(idx)}
              onBlur={() => setEditingIdx(null)}
              onInput={(e) => adjustHeight(e.currentTarget)}
              ref={(el) => el && adjustHeight(el)}
              className="w-full bg-white rounded-lg p-3 text-sm text-gray-800 focus:outline-none overflow-hidden"
              style={{ resize: 'none' }}
            />
          </div>
        ))}
      </div>

      <div className="px-4">
        <button
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium"
          onClick={() => {
            console.log("Edited OCR Blocks:", blocks);
          }}
        >
          분석 시작하기
        </button>
      </div>
    </div>
  );
}