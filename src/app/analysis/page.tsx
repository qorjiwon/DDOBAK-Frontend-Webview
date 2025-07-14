"use client";

import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import './styles.scss'
import { ContractAnalysisDTO } from '@/types/api'
import { Toxic } from '@/types/contract'
import { ChevronDown } from 'lucide-react'
import { createPortal } from 'react-dom'
import { fetchContractAnalysis } from '@/api/api'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import MiniDdoBak from '@/components/mini-ddobak';

const ClientAnalysis = dynamic(
    () => Promise.resolve(ContractAnalysis),
    { ssr: false }
)

export default function Page() {
    return (
        <Suspense fallback={<div>Loading…</div>}>
            <ClientAnalysis />
        </Suspense>
    )
}

const ContractAnalysis: React.FC = () => {
    const searchParams = useSearchParams();
    const contId = searchParams.get('contId') ?? ''
    const analysisId = searchParams.get('analysisId') ?? ''
    const [data, setData] = useState<ContractAnalysisDTO | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!contId || !analysisId) {
            setLoading(false);
            return;
        }

        const loadAnalysis = async () => {
            try {
                const result = await fetchContractAnalysis(contId, analysisId);
                setData(result.data);
            } catch (err: unknown) {
                console.error('API 호출 중 오류 발생:', err);
            } finally {
                setLoading(false);
            }
        };

        loadAnalysis();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-500">
                로딩 중...
            </div>
        );
    }

    if (!contId || !analysisId) {
        return (
            <div className="flex items-center justify-center h-screen text-red-500">
                잘못된 접근입니다. contId 또는 analysisId가 없습니다.
            </div>
        );
    }

    return (
        <div className="bg-[#F8F8F8] font-sans text-sm text-gray-800 overflow-hidden">
            <img
                className="w-full"
                src="/many-found.svg"
                alt="또박이"
            />
            {/* Header */}
            <div className="pt-9 text-center">
                <p className="text-[#9E9E9E] font-bold">이 계약서에서 발견된 독소조항은</p>
                <p className="mt-2 text-3xl font-bold text-blue-600">3개</p>
            </div>

            <div className="mt-9 mx-5 space-y-[39px]">
                {/* Summary Card */}
                <RevealOnScroll>
                    <div className="bg-[#FCFCFC] rounded-xl py-6 px-6 font-medium">
                        <h3 className="text-base font-bold text-[#616161] mb-2">요약</h3>
                        <p>
                            {data?.summary || "분석 결과를 불러오지 못했습니다."}
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Note Box */}
                <RevealOnScroll>
                    <div className="rounded-[10px] border-[#1F79FF] border bg-[#F4F8FF] py-[18px] px-[17px] mb-[28px] flex flex-col gap-2">
                        <div className="text-[#1F79FF] font-bold rounded-lg">
                            또박이 한마디
                        </div>
                        <p className="mt-1 text-[#1F79FF] font-medium">
                            {data ? `“${data?.ddobakCommentary.overallComment}”` : "..."}
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll>
                    <MiniDdoBak />
                </RevealOnScroll>
            </div>

            {/* Warning */}
            <div className="bg-[#616161] px-5 py-[28px] space-y-2">

                {/* Warning Summary */}

                <RevealOnScroll>
                    <div className="border-[#FF4949] border bg-[#FFF6F6] rounded-lg p-4 grow basis-0">
                        <h4 className="text-[#FF4949] font-bold">주의 조항 요약</h4>
                        <p className="mt-2 text-[#FF4949] font-medium">
                            {data ? `“${data?.ddobakCommentary.warningComment}”` : ''}
                        </p>
                    </div>
                </RevealOnScroll>


                {/* Clause Cards */}
                <div className="space-y-4">
                    {data?.toxics.map((item, idx) => (
                        <RevealOnScroll key={idx}>
                            <ToxicCard idx={idx} item={item} />
                        </RevealOnScroll>
                    ))}
                </div>
            </div>

            {/* Advice Box */}
            <RevealOnScroll>
                <div className="border-[#1F79FF] border bg-[#F4F8FF] rounded-lg p-4 mx-4 mt-6 text-[#1F79FF] space-y-2">
                    <h5 className="font-bold">또박이의 조언</h5>
                    <p className="mt-1 font-medium">
                        {data ? `“${data?.ddobakCommentary.advice}”` : "..."}
                    </p>
                </div>
            </RevealOnScroll>

            <div className="flex justify-between items-end h-23 mx-4">
                <img
                    className="w-full h-auto -mx-2"
                    src="/glasses-ddobak.svg"
                    alt="안경 쓴 또박이"
                />
                <div className="w-full h-auto flex justify-center">
                    <img
                        className="speech-bubble-float"
                        src="/speech-bubble.svg"
                        alt="말풍선"
                    />
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="px-5 pb-6 space-y-3 text-[#1F79FF]">
                <button
                    className="w-full bg-[#1F79FF] px-4 py-4 text-white rounded-lg font-medium"
                    onClick={() => window.webkit?.messageHandlers.savePdf.postMessage({
                        contractId: contId,
                        analysisId: analysisId,
                    })}
                >
                    분석 결과 PDF로 저장
                </button>
                <div className="flex space-x-2">
                    <button
                        className="flex-1 px-4 py-4 border border-[#1F79FF] rounded-lg text-[#1F79FF] font-medium"
                        onClick={() => window.webkit?.messageHandlers.analyzeOther.postMessage(null)}
                    >
                        다른 계약서 분석하기
                    </button>
                    <button
                        className="flex-1 px-4 py-4 border border-[#1F79FF] rounded-lg text-[#1F79FF] font-medium"
                        onClick={() => window.webkit?.messageHandlers.goHome.postMessage(null)}
                    >
                        홈으로 돌아가기
                    </button>
                </div>
            </div>
        </div>
    );
};

const ToxicCard: React.FC<{ idx: number; item: Toxic }> = ({ idx, item }) => {
    const [sheetVisible, setSheetVisible] = useState(false);
    const [selected, setSelected] = useState<{ title: string; content: string } | null>(null);

    const handleShowReference = (title: string, content: string) => {
        setSelected({ title, content });
        setSheetVisible(true);
    };

    const closeSheet = () => {
        setSheetVisible(false);
        setSelected(null);
    };

    useEffect(() => {
        if (selected) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selected]);

    return (
        <div className="bg-white rounded-xl p-6 font-medium space-y-3">
            <h4 className="text-[#616161] text-base space-x-3">
                <span className='font-bold'>
                    주의 조항 {String.fromCharCode(9312 + idx)}
                </span>
                <span className="font-medium">{item.title}</span>
            </h4>
            <div className="space-y-2">
                <span className="bg-[#EFEFEF] text-[#616161] text-xs px-2 py-1 rounded-full">
                    조항 원문
                </span>
                <p className="mt-2 text-sm leading-relaxed">
                    “{item.clause}”
                </p>
            </div>
            <div className="space-y-2">
                <span className="bg-[#EFEFEF] text-[#616161] text-xs px-2 py-1 rounded-full">
                    주의 이유
                </span>
                <p className="mt-2 text-sm leading-relaxed">
                    {item.reason}
                </p>
            </div>
            <button
                onClick={() => handleShowReference(item.title, item.reasonReference)}
                className="px-[10px] py-1 bg-[#FF49490D] flex items-center text-red-500 text-sm rounded-full"
            >
                근거보기
                <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {/* BottomSheet 모달 */}
            {selected && (
                <BottomSheet
                    visible={sheetVisible}
                    onClose={closeSheet}
                    content={selected.content}
                />
            )}
        </div>
    );
};

const BottomSheet: React.FC<{
    visible: boolean;
    onClose: () => void;
    content: string;
}> = ({ visible, onClose, content }) => {

    const sheetRef = useRef<HTMLDivElement>(null);
    const startYRef = useRef(0);
    const [dragY, setDragY] = useState(0);
    const [dragging, setDragging] = useState(false);

    const handleTouchStart = (e: React.TouchEvent) => {
        startYRef.current = e.touches[0].clientY;
        setDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const delta = e.touches[0].clientY - startYRef.current;
        if (delta > 0) setDragY(delta);
    };

    const handleTouchEnd = () => {
        setDragging(false);
        console.log("Drag ended at:", dragY);
        if (dragY > 100) {
            // 충분히 드래그하면 닫기
            setDragY(0);
            onClose();
        } else {
            // 아니면 원위치
            setDragY(0);
        }
    };

    if (!visible) return null;
    return (
        createPortal(
            <>
                {/* Overlay */}
                <div
                    className="fixed inset-0 bg-[#1A1A1A4D] bg-opacity-30 z-40"
                    onClick={onClose}
                />

                {/* Bottom sheet */}
                <div
                    ref={sheetRef}
                    className={`fixed bottom-0 left-0 w-full max-h-[80vh] px-6 pb-11 bg-white rounded-t-2xl z-50
                    ${dragging ? '' : 'animate-slide-up'}`}
                    style={dragging ? { transform: `translateY(${dragY}px)` } : undefined}
                >
                    <div className="w-full flex justify-center py-3 mb-[16px]"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="w-21 h-1 bg-[#E4E4E4] rounded-full" />
                    </div>

                    <div className="overflow-y-auto flex flex-col gap-3">
                        <h3 className="text-2xl font-bold">근거 상세보기</h3>
                        <div>
                            <span className="inline-block bg-[#EFEFEF] text-[#616161] text-xs px-2 py-1 rounded-full">
                                관련 판례 및 법적 기준
                            </span>
                        </div>
                        <p className="text-sm text-gray-700 whitespace-pre-line">
                            {content}
                        </p>
                    </div>
                </div>
            </>,
            document.body
        )
    )
}