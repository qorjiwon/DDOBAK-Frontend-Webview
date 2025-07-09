"use client";

import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import './styles.scss';
import { fetchContractOcrResult } from '@/api/api';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { ContractOcrHtml, HtmlBlock } from '@/types/api';
import DOMPurify from 'dompurify';

const ClientOcr = dynamic(
  () => Promise.resolve(OcrResultPage),
  { ssr: false }
)

export default function Page() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <ClientOcr />
    </Suspense>
  )
}

const OcrResultPage = () => {
  const searchParams = useSearchParams();
  const contId = searchParams.get('contId');
  const [blocks, setBlocks] = useState<HtmlBlock[]>([]);
  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!contId) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const res = await fetchContractOcrResult(contId || '');
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

  return (
    <div className="flex flex-col bg-[#FCFCFC] min-h-screen py-[5px]">
      <div className="flex items-center px-5">
        <Link href="/">
          <ChevronLeft size={24} />
        </Link>
      </div>

      <h1 className="pl-6 my-9 text-[28px] font-semibold">인식된 텍스트를 확인하세요</h1>

      <div className="flex-1 px-4 space-y-[10px] mb-4">
        {loading ? <div className="ocr-block h-[200px] w-full"></div>
          : blocks.map((block, idx) => {
            const raw = block.element.trim();

            if (raw.toLowerCase().startsWith("<table")) {
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
                    onFocus={() => setEditingIdx(idx)}
                    onBlur={() => setEditingIdx(null)}
                    className="ocr-table bg-[#F8F8F8] my-6 overflow-x-auto font-medium focus:outline-none"
                    contentEditable
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
                  className="w-full  bg-[#F8F8F8] rounded-lg p-3 text-sm font-medium text-gray-800 focus:outline-none overflow-hidden"
                  style={{ resize: 'none' }}
                />
              </div>
            );
          })}
      </div>

      <div className="px-5 mb-5">
        <button
          className="w-full py-4 bg-[#1F79FF] text-white rounded-lg font-medium"
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