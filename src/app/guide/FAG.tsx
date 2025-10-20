'use client';

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQItem = ({
  q,
  a,
}: {
  q: string;
  a: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200 py-3">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium text-neutral-900 text-sm sm:text-base break-keep">
          {q}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-neutral-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="mt-2 text-neutral-700 text-sm sm:text-base leading-relaxed break-keep whitespace-pre-line">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-neutral-900 mb-4">
        자주 묻는 질문 🙋‍♀️
      </h3>

      <div className="divide-y divide-neutral-100">
        <FAQItem
          q="사진만 올려도 괜찮을까요?"
          a={
            <>
              네, 가능합니다. 카메라로 찍은 이미지나 PDF 모두 인식돼요.  
              다만 문서가 너무 어둡거나 흐릿하면 인식률이 떨어질 수 있어요.  
              📷 <span className="font-semibold">밝고 평평한 곳에서 전체가 보이게 촬영</span>하면 가장 정확합니다.
            </>
          }
        />
        <FAQItem
          q="인식된 글자가 이상하게 보이는데, 수정할 수 있나요?"
          a={
            <>
              물론이죠. OCR 결과 화면에서 텍스트를 직접 눌러 수정할 수 있어요.  
              오타나 줄바꿈을 바꾸고{" "}
              <span className="font-semibold">“다시 분석하기”</span>를 누르면 수정 내용이 반영됩니다.
            </>
          }
        />
        <FAQItem
          q="민감한 정보(주민번호, 계좌 등)가 있는데 괜찮을까요?"
          a={
            <>
              또박은 사용자의 개인정보 보호를 가장 중요하게 생각합니다.  
              분석 전 <span className="font-semibold">마스킹 도구로 직접 가리기</span>를 꼭 권장드려요.  
              업로드된 원본 파일은 AWS S3에 임시 저장되며,  
              <span className="font-semibold">24시간 후 자동으로 완전히 삭제</span>됩니다.
            </>
          }
        />
        <FAQItem
          q="결과가 법률 자문처럼 신뢰할 수 있나요?"
          a={
            <>
              또박은 법률 자문 서비스가 아니라,  
              계약서 속 <span className="font-semibold">주의할 만한 조항을 알려주는 가이드 도구</span>입니다.  
              결과는 참고용으로 활용하시고, 중요한 계약은 전문가 상담을 권장드려요 🙂
            </>
          }
        />
        <FAQItem
          q="분석 결과를 나중에 다시 볼 수 있나요?"
          a={
            <>
              네. 분석이 완료되면 결과를{" "}
              <span className="font-semibold">PDF로 저장</span>할 수 있어요.  
              저장한 파일은 이메일이나 메신저로 쉽게 공유할 수 있습니다.
            </>
          }
        />
      </div>
    </div>
  );
};

export default FAQSection;