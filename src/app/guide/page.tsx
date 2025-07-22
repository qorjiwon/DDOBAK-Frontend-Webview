import React from 'react';

const DemoGuide: React.FC = () => (
    <div className="relative max-w-4xl mx-auto px-6 py-8">
        {/* 페이지 제목 */}
        <h1 className="text-3xl font-bold mb-6">데모 사용 가이드</h1>

        {/* beta 링크 헤더 */}
        <h3 className="text-2xl font-semibold mb-4">
            <a
                href="https://testflight.apple.com/join/RPsqV3C9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
            >
                <img
                    src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/f7/87/66/f7876663-0290-e3b2-ac01-315329b0980d/AppIcon-0-0-1x_U007ephone-0-1-0-85-220.png/1920x1080bb-80.png"
                    alt="앱 아이콘"
                    className="w-8 h-8 rounded mr-2"
                />
                Join the DDOBAK beta
            </a>
        </h3>

        {/* 순서 목록 1 */}
        <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>테스트플라이트에서 실행 후, 최하단으로 스크롤하여 Access Token 입력</li>
        </ol>

        {/* 두 이미지 가로 배치 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <img
                src="https://lemon-hockey-ad5.notion.site/image/attachment%3A20d5d334-2724-4652-92a0-eda272942f66%3Aimage.png?table=block&id=236f997e-6c3c-8036-8b86-ef81c72df058&spaceId=105393ee-64eb-465f-a2c3-c903cfb2e132&width=750&userId=&cache=v2"
                alt="토큰 입력 예시 1"
                className="w-full rounded-lg"
            />
            <img
                src="https://lemon-hockey-ad5.notion.site/image/attachment%3A9a85aa7e-5fdd-4c6a-9186-1e24757127d5%3Aimage.png?table=block&id=236f997e-6c3c-804d-89b6-cf75dfe8c10e&spaceId=105393ee-64eb-465f-a2c3-c903cfb2e132&width=580&userId=&cache=v2"
                alt="토큰 입력 예시 2"
                className="w-full rounded-lg"
            />
        </div>

        {/* Access Token 섹션 */}
        <h2 className="text-xl font-semibold mb-2">Access Token</h2>
        <pre className="bg-[#F7F6F3] rounded-2xl p-4 font-mono text-sm mb-6 overflow-auto">
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5OTkiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJuYW1lIjoiWW9vbmppIiwidG9rZW5UeXBlIjoiYWNjZXNzIiwiaWF0IjoxNzA0MDY3MjAwLCJleHAiOjk5OTk5OTk5OTl9.UHFQeesHjt1P-Hmf5JYflqnXCj-N7CqokxCpNxAZu-A
        </pre>

        {/* 순서 목록 2 */}
        <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>
                기능 관련 사용법은{' '}
                <a
                    href="https://www.notion.so/236f997e6c3c803fa005efb4b8c65943?pvs=21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                >
                    <span
                        style={{
                            display: 'inline-block',
                            marginLeft: '0.1em',
                            marginRight: '0.5em',
                            width: '1em',
                            whiteSpace: 'nowrap',
                            position: 'relative'
                        }}
                    >
                        🦮
                        <svg
                            aria-hidden="true"
                            role="graphics-symbol"
                            viewBox="0 0 13 13"
                            style={{
                                width: '0.7em',
                                height: '0.7em',
                                display: 'block',
                                fill: 'rgba(50, 48, 44, 1)',
                                flexShrink: 0,
                                position: 'absolute',
                                right: '-0.2em',
                                bottom: 0,
                                stroke: 'white',
                                strokeWidth: 1.5
                            }}
                            className="pageLinkIndicator"
                        >
                            <path d="M6.30826 4.43292L1.76184 8.98454C1.76176 8.98462 1.76169 8.9847 1.76161 8.98477C1.76158 8.9848 1.76156 8.98482 1.76154 8.98484C1.46068 9.28584 1.25 9.6914 1.25 10.1565C1.25 10.6117 1.45865 11.0119 1.73417 11.2886C2.01014 11.5658 2.41107 11.7773 2.87078 11.7773C3.34169 11.7773 3.73758 11.5617 4.03477 11.2733L4.03482 11.2734L4.04244 11.2657L8.58864 6.72474V8.667C8.58864 9.51956 9.22729 10.2935 10.1521 10.2935C11.0528 10.2935 11.75 9.54534 11.75 8.66127V2.92671C11.75 2.48722 11.5981 2.06381 11.2838 1.74808C10.9689 1.43182 10.5446 1.27728 10.1006 1.27728H4.36028C3.46161 1.27728 2.72804 1.97749 2.72804 2.86942C2.72804 3.79734 3.51104 4.43292 4.35455 4.43292H6.30826Z" fill="#3E3C38" stroke="white" strokeWidth="1.5"></path>
                        </svg>
                    </span>
                    또박이 이용 가이드
                </a>{' '}
                참고
            </li>
        </ol>

        {/* 추가 이미지 */}
        <div className="mb-6">
            <img
                src="https://lemon-hockey-ad5.notion.site/image/attachment%3A34b25925-a36a-4daa-adab-2a78ead0a6cb%3Aimage.png?table=block&id=236f997e-6c3c-803e-91c1-f3c25b466526&spaceId=105393ee-64eb-465f-a2c3-c903cfb2e132&width=1120&userId=&cache=v2"
                alt="추가 예시"
                className="w-full rounded-lg"
            />
        </div>
    </div>
);

export default DemoGuide;
