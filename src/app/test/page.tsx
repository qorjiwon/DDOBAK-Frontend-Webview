'use client';

export default function TestPage() {
  return (
      <button
        className="w-full px-3 py-3 bg-[#1F79FF] text-sm text-white rounded-lg font-medium"
        onClick={() => window.webkit?.messageHandlers.goHome.postMessage(null)}
      >
        홈으로 돌아가기
      </button>
  );
}
