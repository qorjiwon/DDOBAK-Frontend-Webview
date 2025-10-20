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
        upload: "https://img.notionusercontent.com/s3/prod-files-secure%2F2b838b61-8caf-43f8-8a43-aac6045ed11d%2F1fade644-01e7-4055-a7ec-fa37733cd63e%2Fimage.png/size/w=480?exp=1760954067&sig=HmFcp7L3Mkj1ar9Hmys-Bl1LTN4CQacWgSY9prhVt4U&id=2927220c-4421-8057-bc85-f75acdaf8aba&table=block&userId=d77bda8f-addc-4a39-a464-fb8b420def80",
        mask: "https://img.notionusercontent.com/s3/prod-files-secure%2F2b838b61-8caf-43f8-8a43-aac6045ed11d%2Fe633251d-ac03-42e0-8bd0-47eeb921cbec%2Fimage.png/size/w=480?exp=1760954017&sig=QWgt0jneOiJreuCZNpEZsMoqSdymeudCx9oGQ0ezV5w&id=2927220c-4421-8027-aeef-c2e06dd0eb5d&table=block&userId=d77bda8f-addc-4a39-a464-fb8b420def80",
        preview: "https://img.notionusercontent.com/s3/prod-files-secure%2F2b838b61-8caf-43f8-8a43-aac6045ed11d%2F8492b7ec-d5ab-4d99-a581-504c44f63e0c%2Fimage.png/size/w=480?exp=1760954084&sig=hc9lRlWNZh2DQ-hK6aF0okWo3cEFDOLe8bYRQwBtQww&id=2927220c-4421-808d-a1fa-c8947882a1de&table=block&userId=d77bda8f-addc-4a39-a464-fb8b420def80",
        analyze: "https://img.notionusercontent.com/s3/prod-files-secure%2F2b838b61-8caf-43f8-8a43-aac6045ed11d%2F60e3e7fe-5354-4fba-8862-f5f7ef19d9da%2Fimage.png/size/w=2000?exp=1761040440&sig=ns2B_o2AP0UakH06vwwvlebSOlu-d2qO5Ey_-unTa5Y&id=2927220c-4421-8029-8f60-c857ea4dbfd0&table=block&userId=d77bda8f-addc-4a39-a464-fb8b420def80",
        summary: "https://img.notionusercontent.com/s3/prod-files-secure%2F2b838b61-8caf-43f8-8a43-aac6045ed11d%2F2b81e456-6d33-4fb3-addc-070d398e64a8%2Fimage.png/size/w=2000?exp=1761040471&sig=vLITfkxqYTmItgy8Njt60kokVeUzYx1tx89RQLZ2aik&id=2927220c-4421-8004-8047-fb1e1e816825&table=block&userId=d77bda8f-addc-4a39-a464-fb8b420def80",
        detail: "https://img.notionusercontent.com/s3/prod-files-secure%2F2b838b61-8caf-43f8-8a43-aac6045ed11d%2F680d3686-f695-4213-b641-9ff249936fba%2Fimage.png/size/w=2000?exp=1761040783&sig=ZtPRR1BpcCPK9dDmJHDCb3-eO4OPp0zDsfPxj_PY6dY&id=2927220c-4421-8031-83d9-d2fe8bc4124d&table=block&userId=d77bda8f-addc-4a39-a464-fb8b420def80",
        export: "https://img.notionusercontent.com/s3/prod-files-secure%2F2b838b61-8caf-43f8-8a43-aac6045ed11d%2F9ed90067-be26-4004-8ec2-a16b15a13940%2F09f444ea-28d1-4b28-86f2-1728c171308e.png/size/w=2000?exp=1761040963&sig=6ydQ2faD7th8coSAkJyjrZzQGI7-C5e_eZhSx1iWgD8&id=2927220c-4421-801f-bd11-e32635092372&table=block&userId=d77bda8f-addc-4a39-a464-fb8b420def80",
    };

    return (
        <div className="min-h-screen bg-neutral-50 px-4 sm:px-6 py-10">
            <div className="max-w-2xl mx-auto text-neutral-800">
                {/* Header */}
                <header className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                        또박 이용 가이드
                    </h1>
                    <p className="text-neutral-500 text-base">
                        계약서를 쉽고 안전하게 확인하는 가장 간단한 방법
                    </p>
                </header>

                {/* Section 1 */}
                <section className="mb-8 bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-neutral-900 mb-4">
                        시작 전에
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

                {/* Section 2 */}
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

                {/* Section 3 */}
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

                {/* Section 4 */}
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
