"use client";

import React, { useEffect, useState } from 'react';
import './styles.scss';
import { fetchContractOcrResult } from '@/api/api';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { ContractOcrHtml, HtmlBlock } from '@/types/api';
import DOMPurify from 'dompurify';

export default function OcrCorrectionPage() {
  const [blocks, setBlocks] = useState<HtmlBlock[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchContractOcrResult();
        const data: ContractOcrHtml = res.data;
        setBlocks(data.htmlArray);
      } catch (err: unknown) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        로딩 중...
      </div>
    );
  }

  return (
    <div className="p-2 bg-gray-50">
      <div className="flex flex-col min-h-screen py-[5px]">
        <div className="flex items-center px-5">
          <Link href="/">
            <ChevronLeft size={24} />
          </Link>
        </div>
        <h1 className="pl-6 my-9 text-[28px] font-semibold">인식된 텍스트를 확인하세요</h1>
        <div className="bg-white" id="div_ex">
          <div className="px-4 mb-4">
            {blocks.map((block) => (
              <div
                key={block.id}
                className="my-2 p-2 overflow-x-auto ocr-table"
                contentEditable
                // dangerouslySetInnerHTML 로 table 태그 살리기
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(block.element.replace(/^(?:\s*<br\s*\/?>\s*)+/i, ''), { USE_PROFILES: { html: true } }) }}
              />
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
      </div>
    </div>
  );
}