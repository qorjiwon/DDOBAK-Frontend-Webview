"use client";

import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react';
import './styles.scss';
import { fetchContractOcrResult, createContractAnalysis, updateContractOcr } from '@/api/api';
import { ContractOcrHtml, HtmlBlock } from '@/types/api';
import DOMPurify from 'dompurify';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedDdobak from '@/components/DdobakAnalyzer/AnimatedDdobak';

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
  const [showAnalyzing, setShowAnalyzing] = useState(false);
  const [textareaValues, setTextareaValues] = useState<{ [key: string]: string }>({});

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

        // textarea 초기값 설정
        const initialValues: { [key: string]: string } = {};
        data.htmlArray.forEach(block => {
          if (!block.element.toLowerCase().startsWith("<table")) {
            initialValues[block.id] = stripHtml(block.element);
          }
        });
        setTextareaValues(initialValues);
      } catch (err: unknown) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

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

  useEffect(() => {
    if (!showAnalyzing) return;

    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = '';
    };
  }, [showAnalyzing]);


  const adjustHeight = (el: HTMLTextAreaElement) => {
    el.style.height = 'auto';
    el.style.height = el.scrollHeight + 'px';
  };

  const stripHtml = (html: string) =>
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .trim();

  const handleTableBlur = async (idx: number, element: HTMLDivElement | null) => {
    if (!element) return;
    const updated = [...blocks];
    updated[idx] = { ...updated[idx], element: element.innerHTML || '' };
    setBlocks(updated);
    try {
      await updateContractOcr(contId || '', updated[idx].id, element.innerHTML || '');
    } catch (err) {
      console.error('테이블 블록 업데이트 실패:', err);
    }
  };

  const pageVariants = {
    initial: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };
  const analyzingVariants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.2 } },
  };

  const startAnalysis = async (ocrSucceeded: boolean) => {
    setShowAnalyzing(true);
    try {
      await createContractAnalysis(contId || '', ocrSucceeded);
      window.webkit?.messageHandlers.startAnalysis.postMessage(null);
    } catch (err: unknown) {
      console.error(err);
      alert('분석 시작 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  }

  const replaceInnerTextKeepWrapper = (originalHtml: string, newText: string) => {
    const match = originalHtml.match(/^<(\w+)([^>]*)>([\s\S]*)<\/\1>$/);
    const innerHtml = newText.replace(/\n/g, "<br>");
    if (match) {
      const tagName = match[1];
      const attrs = match[2];
      return `<${tagName}${attrs}>${innerHtml}</${tagName}>`;
    }
    // 태그 없으면 그냥 개행만 br 로
    return innerHtml;
  };

  return (

    <div className="relative w-full min-h-screen">
      <AnimatePresence mode="sync">
        {!showAnalyzing ? (
          <motion.div
            key="ocr-page"
            initial="initial"
            animate="initial"
            exit="exit"
            variants={pageVariants}
            className="flex flex-col pt-[5px]"
          >

            <h1 className="pl-6 my-9 text-[28px] font-semibold">인식된 텍스트를 확인하세요</h1>

            <div className="flex-1 px-4 space-y-[10px] mb-4">
              {loading ? <div className="ocr-block h-[200px] w-full"></div>
                : blocks.length === 0 ? <div className="text-center text-gray-500">텍스트를 확인할 수 없습니다. 계약서를 더 잘 보이게 촬영해주세요!</div>
                  : <>
                    {blocks.map((block, idx) => {
                      const raw = block.element;  // 전체 HTML
                      const textValue = textareaValues[block.id] ?? stripHtml(raw);

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
                              onBlur={(e) => {
                                setEditingIdx(null);
                                handleTableBlur(idx, e.currentTarget as HTMLDivElement);
                              }}
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
                            value={textValue}
                            onChange={(e) => {
                              const newPlain = e.target.value;
                              setTextareaValues(v => ({ ...v, [block.id]: newPlain }));

                              const updated = [...blocks];
                              updated[idx] = { ...updated[idx], element: replaceInnerTextKeepWrapper(raw, newPlain) };
                              setBlocks(updated);
                              adjustHeight(e.target);
                            }}
                            onFocus={() => setEditingIdx(idx)}
                            onBlur={async () => {
                              setEditingIdx(null);
                              try {
                                await updateContractOcr(contId || '', blocks[idx].id, blocks[idx].element);
                              } catch (err) {
                                console.error('테이블 블록 업데이트 실패:', err);
                              }
                            }}
                            onInput={(e) => adjustHeight(e.currentTarget)}
                            ref={(el) => { if (el) adjustHeight(el); }}
                            className="w-full bg-[#F8F8F8] rounded-lg p-3 text-sm font-medium text-[#1A1A1A] focus:outline-none overflow-hidden"
                            style={{
                              resize: 'none',
                              whiteSpace: 'pre-wrap'
                            }}
                          />
                        </div>
                      );
                    })}

                    <div className="px-5 mb-5">
                      <button
                        className="w-full py-4 bg-[#1F79FF] text-[#FCFCFC] rounded-lg font-medium"
                        onClick={() => startAnalysis(true)}
                      >
                        분석 시작하기
                      </button>
                    </div>
                  </>
              }
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="analyzing-screen"
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            variants={analyzingVariants}
            className="fixed inset-0 bg-[#FCFCFC] z-20 flex flex-col items-center justify-center"
          >
            <AnimatedDdobak />
            <h1 className="fadeup fadeup-delay-1 text-[28px] text-[#1A1A1A] font-semibold mb-2">분석을 시작했어요!</h1>
            <p className="fadeup fadeup-delay-2 text-sm font-medium text-[#1A1A1A] mb-21">또박이가 분석 중이에요. 금방 결과 알려드릴게요.</p>

            <button
              className="mt-15 w-full max-w-xs px-6 py-4 bg-[#1F79FF] text-white rounded-lg font-medium"
              onClick={() => window.webkit?.messageHandlers.goHome.postMessage(null)}
            >
              홈으로 돌아가기
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}