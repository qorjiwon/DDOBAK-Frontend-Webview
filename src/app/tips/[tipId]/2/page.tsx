import { blockquote } from 'framer-motion/client';
import React from 'react';

const PDFContractClauses: React.FC = () => (
  <div className="container">
    <h1 className="heading">💡이런 문구, 독소 조항일 수 있어요!</h1>
    <div className="note">
      <div className="imoji">👀</div>
      <div className="text">
        <p>‘<strong>경업금지</strong>’, ‘<strong>손해배상</strong>’이라는 단어, 들어는 봤지만 막상 계약서에서 보면 어떻게 해석해야 할지 모를 때가 많죠.</p>
        <p>근로계약서에서 특히 유의해서 봐야 할 독소조항들을 예시와 함께 정리했어요.</p>
      </div>
    </div>

    <section className="section">
      <h3 className="subheading">1️⃣ 경업 금지 조항</h3>
      <blockquote>
        퇴사 후 일정 기간·지역 내에서 동종 업종에 취업하거나 창업하지 못하도록 제한하는 조항
      </blockquote>

      <h4>판례 사례</h4>
      <ul className="list">
        <li>
          미용실 디자이너가 퇴사 후 인근(5 km 이내) 개업하면 2천만 원 배상하도록 한 약정으로 소송됨. 법원은 “5 km 범위는 과도하다”고 지적
          <ul className="list">
            <li>
              <a href="https://m.radio.ytn.co.kr/interview_view.php?id=77172&s_mcd=0440&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://m.radio.ytn.co.kr/favicon.ico" alt="" />
                  "근무했던 미용실에서 손해배상 소송, 알고보니 계약서에 독소조항?"
              </a>
            </li>
          </ul>
        </li>
        <li>근로자성·지역·기간·대가 등을 종합적으로 고려해야 하며, 과도한 제한은 무효</li>
      </ul>

      <h4>⚠️ 주의 포인트</h4>
      <ul className="list">
        <li><strong style={{ color: '#CD3C3A' }}>지역·기간</strong>이 현실적으로 타당한지 (예: 1–2 km, 6개월 이하)</li>
        <li>영업비밀 보호를 위한 정당성이 있는지</li>
        <li><strong style={{ color: '#CD3C3A' }}>대가 지급</strong> 여부: 계약 체결 시 특별 보상을 받았는지</li>
        <li>본문 또는 인사규정에 포함되어 있는지, 사전 동의 여부까지 확인 필요</li>
      </ul>
    </section>

    <div role="separator" className="separator" />

    <section className="section">
      <h3 className="subheading">2️⃣ 손해배상·위약벌 조항</h3>
      <blockquote>위반 발생 시 회사의 피해를 보전하겠다는 약정</blockquote>

      <h4>구분</h4>
      <ul className="list">
        <li>
          <strong>손해배상 예정액(위약금)</strong>: 계약 위반 시 자동 징수. 민법상 “부당 과다할 경우 법원이 감액 가능”
          <ul className="list">
            <li>
              <a href="https://www.jipyong.com/kr/board/news_view.php?nownum=843&page=94&seq=7322&type=&value=&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                <img src="https://www.jipyong.com/kr/resource/images/favi.ico" alt="" />
                <span>법무법인[유] 지평</span> 노동칼럼 경업금지 약정의 효력
              </a>
            </li>
          </ul>
        </li>
        <li><strong>위약벌(Penalty clause)</strong>: 실제 피해와 무관하게 약정된 벌금 성격</li>
      </ul>

      <h4>⚠️ 주의 포인트</h4>
      <ul className="list">
        <li><strong>액수가 합리적인지</strong> (통상 계약금 1~3배)</li>
        <li><strong>실제 손해 입증이 어려울 때</strong> 자동 징수 조항인지</li>
        <li><strong>이중 청구 금지</strong>: 위약금 받고도 추가 배상은 불가능할 수 있음</li>
      </ul>
    </section>

    <div role="separator" className="separator" />

    <section className="section">
      <h3 className="subheading">3️⃣ 계약 자동 연장 / 자동 갱신</h3>
      <blockquote>별도 해지 의사표시 없으면 계약 자동 연장</blockquote>

      <h4>⚠️ 주의 포인트</h4>
      <ul className="list">
        <li><strong>갱신 조건</strong> 및 <strong>중도 해지 시한</strong>(예: 만료 30일 전 통보)</li>
        <li>만기 후 불리한 조건으로 자동 연장될 수 있다는 점</li>
      </ul>
    </section>

    <div role="separator" className="separator" />

    <section className="section">
      <h3 className="subheading">4️⃣ 일방적인 해지 권한</h3>
      <blockquote>회사만 일방적인 해지 가능 조항</blockquote>
      <ul className="list">
        <li><strong>해지 사유가 명확한지</strong> (예: 중대한 위반 등)</li>
        <li>회사와 근로자 모두 해지 가능한지</li>
        <li>불명확할 경우 <strong>불공정 약관</strong>이 될 수 있음</li>
      </ul>
    </section>
  </div >
);

export default PDFContractClauses;