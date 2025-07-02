"use client";
import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { ContractAnalysisDTO } from '@/types/api';
import { Toxic } from '@/types/contract';
import { ChevronDown } from "lucide-react";
import { createPortal } from 'react-dom';
import { fetchContractAnalysis } from '@/api/api';

const ContractAnalysis: React.FC = () => {
    const [data, setData] = useState<ContractAnalysisDTO | null>(null);

    useEffect(() => {
        const loadAnalysis = async () => {
            try {
                const result = await fetchContractAnalysis();
                setData(result.data);
            } catch (err: any) {
                console.error('API 호출 중 오류 발생:', err);
            } finally {
            }
        };

        loadAnalysis();
    }, []);

    return (
        <div className="bg-[#F8F8F8] font-sans text-sm text-gray-800">
            {/* Header */}
            <div className="pt-9 text-center">
                <p className="text-gray-500">이 계약서에서 발견된 독소조항은</p>
                <p className="mt-2 text-3xl font-bold text-blue-600">3개</p>
            </div>

            <div className="mt-9 mx-5 space-y-2">
                {/* Summary Card */}
                <div className="bg-[#FCFCFC] rounded-xl py-6 px-6 font-medium">
                    <h3 className="text-base font-bold text-[#616161] mb-2">요약</h3>
                    <p>
                        이 계약서는 (주)여기어때컴퍼니와 아르바이트 근로자 간의 근로 계약서입니다.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-[#1A1A1A] leading-[1.4]">
                        <li>근무지: (주)케이컴퍼니와 아르바이트 근로자 간의 근로 계약</li>
                        <li>근무 요일: 월~금</li>
                        <li>근무 유형: 단기 근로</li>
                        <li>시급: 10,470원</li>
                        <li>포함 항목: 근무 시간, 휴게 시간, 임금 지급, 휴일 및 휴가 규정 등</li>
                    </ul>
                </div>

                {/* Note Box */}
                <div className="NoteBox rounded-[10px] py-[18px] px-[17px] mb-[28px] flex flex-col gap-2">
                    <div className="text-[#1F79FF] font-bold rounded-lg">
                        또박이 한마디
                    </div>
                    <p className="mt-1 text-[#1F79FF] font-medium">
                        {`“${data?.ddobakCommentary.overallComment}”`}
                    </p>
                </div>
            </div>

            {/* Warning */}
            <div className="bg-[#616161] px-5 py-[28px] space-y-2">

                {/* Warning Summary */}
                <div className="WarningSummary rounded-lg p-4 grow basis-0">
                    <h4 className="text-[#FF4949] font-bold">주의 조항 요약</h4>
                    <p className="mt-2 text-[#FF4949] font-medium">
                        “또박이가 보기엔, 이 계약서엔 <b>‘너무 회사 중심’</b>인 조항들이 보여요!”
                    </p>
                </div>


                {/* Clause Cards */}
                <div className="space-y-4">
                    {data?.toxics.map((item, idx) => (
                        <ToxicCard key={idx} idx={idx} item={item} />
                    ))}
                </div>
            </div>

            {/* Advice Box */}
            <div className="AdviceBox rounded-lg p-4 mx-4 mt-6 text-[#1F79FF] space-y-2">
                <h5 className="font-bold">또박이의 조언</h5>
                <p className="mt-1 font-medium">
                    {`“${data?.ddobakCommentary.advice}”`}
                </p>
            </div>

            {/* Footer Buttons */}
            <div className="px-4 mt-9 pb-6 space-y-3 text-[#1F79FF]">
                <button
                    className="w-full bg-[#1F79FF] px-4 py-4 text-white rounded-lg font-medium"
                    onClick={() => window.webkit?.messageHandlers.savePdf.postMessage(null)}
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

export default ContractAnalysis;