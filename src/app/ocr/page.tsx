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
  const [editingIdx, setEditingIdx] = useState<number | null>(null);
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

  const adjustHeight = (el: HTMLTextAreaElement) => {
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  };

  const stripHtml = (html: string) =>
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .trim();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        로딩 중...
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen py-[5px]">
      <div className="flex items-center px-5">
        <Link href="/">
          <ChevronLeft size={24} />
        </Link>
      </div>

      <h1 className="pl-6 my-9 text-[28px] font-semibold">인식된 텍스트를 확인하세요</h1>

      <div className="flex-1 px-4 space-y-[10px] mb-4">
        {blocks.map((block, idx) => {
          const raw = block.element.trim();

          // 1) 테이블 블록 감지
          if (raw.toLowerCase().startsWith("<table")) {
            // sanitize 한 뒤, 진짜 table 태그로 렌더
            const clean = DOMPurify.sanitize(raw, { USE_PROFILES: { html: true } });
            return (
            <div
              key={block.id}
              className="ocr-block"
              style={{
                '--delay': `${idx * 0.25}s`,
                '--target-opacity': editingIdx !== null && editingIdx !== idx ? '0.3' : '1'
              } as React.CSSProperties}
            >
              <div
                key={block.id}
                className="my-6 overflow-x-auto ocr-table"
                contentEditable
                // dangerouslySetInnerHTML 로 table 태그 살리기
                dangerouslySetInnerHTML={{ __html: clean }}
              />
            </div>
          );
        }

          return (
            <div
              key={block.id}
              className="ocr-block"
              style={{
                '--delay': `${idx * 0.25}s`,
                '--target-opacity': editingIdx !== null && editingIdx !== idx ? '0.3' : '1'
              } as React.CSSProperties}
            >
              <textarea
                value={stripHtml(raw)}
                onChange={(e) => {
                  const updated = [...blocks];
                  updated[idx] = { ...updated[idx], element: e.target.value };
                  setBlocks(updated);
                  adjustHeight(e.target);
                }}
                onFocus={() => setEditingIdx(idx)}
                onBlur={() => setEditingIdx(null)}
                onInput={(e) => adjustHeight(e.currentTarget)}
                ref={(el) => { if (el) adjustHeight(el); }}
                className="w-full bg-white rounded-lg p-3 text-sm text-gray-800 focus:outline-none overflow-hidden"
                style={{ resize: 'none' }}
              />
            </div>
          );
        })}
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