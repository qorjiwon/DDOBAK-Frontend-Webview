import React from "react";
import FAQSection from "./FAG";

const Img = ({ src, alt }: { src?: string; alt: string }) =>
    src ? (
        <img
            src={src}
            alt={alt}
            className="mt-4 w-full h-auto rounded-xl"
            loading="lazy"
            decoding="async"
        />
    ) : null;

const Guide: React.FC = () => {
    const images = {
        upload: "https://velog.velcdn.com/images/wldnjsl2001/post/590d11c7-2f8e-43f1-b519-8c705cc79d8f/image.png",
        mask: "https://velog.velcdn.com/images/wldnjsl2001/post/b165e4d6-b170-46df-a87d-0badba48d934/image.png",
        preview: "https://velog.velcdn.com/images/wldnjsl2001/post/e6424833-cb83-4eab-acd2-7cd19dd5b1bb/image.png",
        analyze: "https://velog.velcdn.com/images/wldnjsl2001/post/df10cf18-3d5e-49b0-bcb5-48239ecc0278/image.png",
        summary: "https://velog.velcdn.com/images/wldnjsl2001/post/af307f8c-d5d7-484e-90ec-241a81da54e8/image.png",
        detail: "https://velog.velcdn.com/images/wldnjsl2001/post/befaae56-d486-476b-84a4-904ed623ce0b/image.png",
        export: "https://velog.velcdn.com/images/wldnjsl2001/post/ae67e9ec-40ac-46ac-bd11-81ab01c0d98a/image.png",
        archive: "https://velog.velcdn.com/images/wldnjsl2001/post/e05e48c1-dddc-4ef2-9643-dcc25392f1fb/image.png" // same as export? update if different
    };


    return (
        <div className="min-h-screen bg-neutral-50 px-4 sm:px-6 py-10">
            <div className="max-w-2xl mx-auto text-neutral-800">
                <header className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                        또박 이용 가이드
                    </h1>
                    <p className="text-neutral-500 text-base">
                        계약서를 쉽고 안전하게 확인하는 가장 간단한 방법
                    </p>
                </header>
                <section className="mb-8 bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                        서비스 이용 전, 꼭 알아두세요!
                    </h2>
                    <ul className="space-y-3 text-sm sm:text-base leading-relaxed whitespace-pre-line break-keep">
                        <li className="flex flex-col sm:flex-row gap-1">
                            <span className="font-medium">지원 파일:</span> JPG, PNG, PDF
                        </li>
                        <li className="flex flex-col sm:flex-row gap-1">
                            <span className="font-medium">권장:</span> 문서 전체가 보이게 촬영
                            (그림자/기울기 최소화)
                        </li>
                        <li className="flex flex-col sm:flex-row gap-1">
                            <span className="font-medium">개인정보:</span>
                            <p>
                                주민번호·계좌·서명 등은 업로드 전에{" "}
                                <span className="font-semibold">직접 가리기</span> 권장
                            </p>
                        </li>

                    </ul>
                </section>

                <section className="mb-8 bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                        분석 과정 한 눈에 보기 👀
                    </h2>
                    <ol className="space-y-3 text-sm sm:text-base">
                        {["사진 찍기·업로드", "OCR 확인·수정", "분석 실행", "결과 저장·공유"].map(
                            (step, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white text-xs">
                                        {i + 1}
                                    </span>
                                    {step}
                                </li>
                            )
                        )}
                    </ol>
                </section>

                <section className="mb-8 bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-neutral-900 mb-6">
                        1단계. 계약서 업로드 &amp; OCR
                    </h2>
                    <div className="space-y-8 text-sm sm:text-base leading-relaxed break-keep">
                        <div>
                            <p>① “계약서 맡기기” → 사진 촬영 또는 파일 선택</p>
                            <Img src={images.upload} alt="업로드 화면 예시" />
                        </div>
                        <div>
                            <p>② 마스킹 도구로 민감정보를 블러/검정 처리</p>
                            <Img src={images.mask} alt="마스킹 예시" />
                        </div>
                        <div>
                            <p>③ 인식된 문장을 확인하고 오타를 수정</p>
                            <Img src={images.preview} alt="OCR 미리보기 예시" />
                        </div>
                        <div>
                            <p>④ “분석하기” 버튼을 눌러 분석 시작</p>
                            <Img src={images.analyze} alt="분석 버튼 예시" />
                        </div>
                    </div>
                </section>

                <section className="mb-8 bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-neutral-900 mb-6">
                        2단계. 분석 결과 보기
                    </h2>
                    <div className="space-y-8 text-sm sm:text-base leading-relaxed break-keep">
                        <div>
                            <p>① 핵심 요약 카드에서 주요 조항·금액·기간을 확인</p>
                            <Img src={images.summary} alt="요약 카드 예시" />
                        </div>
                        <div>
                            <p>
                                ② 위험 가능성이 높은 조항은{" "}
                                <span className="text-red-600 font-semibold">빨간색</span>으로 표시
                            </p>
                        </div>
                        <div>
                            <p>
                                ③ <span className="font-semibold">조항 펼치기</span>를 누르면
                                원문 인용·위험 이유·법적 근거를 함께 볼 수 있습니다.
                                <br />
                                (현재 버전은 “하이라이트 점프” 기능은 제공되지 않습니다.)
                            </p>
                            <Img src={images.detail} alt="상세 보기 예시" />
                        </div>
                        <div>
                            <p>④ 분석 결과를 PDF로 저장하거나 공유할 수 있습니다.</p>
                            <Img src={images.export} alt="PDF 저장 예시" />
                        </div>
                    </div>
                </section>

                <section className="mb-8 bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-neutral-900 mb-6">
                        3단계. 결과 아카이브 확인 📁
                    </h2>
                    <div className="space-y-8 text-sm sm:text-base leading-relaxed break-keep">
                        <div>
                            <p>
                                ① 분석이 완료된 계약서는 <span className="font-semibold">자동으로 보관함(아카이브)에 저장</span>됩니다.
                                보관함에서 언제든 다시 열람할 수 있습니다.
                            </p>
                            <Img src={images.archive} alt="아카이브 예시" />
                        </div>
                        <div>
                            <p>
                                ② 각 문서는 요약 카드·위험 조항·PDF 파일 등 분석 결과를 그대로 보관합니다.
                                원본 이미지는 별도 다운로드 없이 즉시 확인 가능합니다.
                            </p>
                        </div>
                        <div>
                            <p>
                                ③ 아카이브에서 불필요한 문서는 <span className="font-semibold">삭제</span>할 수 있으며,
                                삭제된 문서는 복구되지 않습니다.
                            </p>
                        </div>
                        <div>
                            <p>
                                ④ 보관 중인 모든 문서는 안전하게 암호화되어 저장되며,{" "}
                                <span className="font-semibold">본인만 접근</span>할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </section>


                <section className="mb-8 grid gap-6 sm:grid-cols-2">
                    <FAQSection />


                    <div className="bg-white rounded-2xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                            문제 해결 & 보안 🔒
                        </h3>

                        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-neutral-700 break-keep whitespace-pre-line">
                            <div className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                                <p>
                                    <span className="font-semibold">업로드 실패:</span>
                                    파일 크기 또는 형식을 확인한 뒤 다시 시도해주세요.
                                    지원 형식은 <span className="font-semibold">JPG, PNG, PDF</span>입니다.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                                <p>
                                    <span className="font-semibold">글자 깨짐:</span>
                                    더 밝은 곳에서 재촬영하거나, 스캔본을 사용하는 것을 권장합니다.
                                    흐릿하거나 그림자가 있으면 OCR 인식률이 낮아질 수 있어요.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                                <p>
                                    <span className="font-semibold">결과 없음:</span>
                                    문서의 가장자리가 잘리면 인식이 되지 않을 수 있습니다.
                                    페이지가 프레임 안에 모두 들어오도록 다시 촬영해보세요.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                                <p>
                                    <span className="font-semibold">개인정보 보호:</span>
                                    주민번호·계좌번호·서명 등은 업로드 전{" "}
                                    <span className="font-semibold">직접 가리기</span> 기능을 이용해 마스킹하세요.
                                </p>
                            </div>

                            <div className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-neutral-900" />
                                <p>
                                    <span className="font-semibold">보안 정책:</span>
                                    업로드된 원본은 AWS S3에 임시 저장되며,
                                    <span className="font-semibold">24시간 후 자동으로 완전히 삭제</span>됩니다.
                                    저장 중에도 외부 접근이 불가능하도록 암호화되어 보호됩니다.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Footer */}
                <footer className="text-center text-sm text-neutral-400 mt-12">
                    © {new Date().getFullYear()} 또박
                </footer>
            </div>
        </div>
    );
};

export default Guide;
