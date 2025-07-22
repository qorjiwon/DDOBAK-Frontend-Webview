'use client';

import AnimatedDdobak from "@/components/DdobakAnalyzer/AnimatedDdobak";
import { motion } from "framer-motion";
import './styles.scss';

export default function TestPage() {
  return (

    <motion.div
      key="analyzing-screen"
      initial="initial"
      animate="animate"
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
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
  );
}
