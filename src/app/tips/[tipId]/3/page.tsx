import React from 'react';

const PDFFirstAlba: React.FC = () => (
  <div className="container">
    <aside className="note">
      <div className="imoji">✨</div>
      <div className="text">
        <p><strong>첫 알바 근로계약서라면? 이런 조항을 주의하세요!</strong></p>
        <p>처음 하는 아르바이트, 설렘 반 걱정 반이죠?</p>
        <p>하지만 근로계약서는 ‘그냥 서명하고 끝’이 아닙니다.</p>
        <p>나중에 임금 문제, 부당 해고, 초과 근무 등에서 <strong>불이익을 당하지 않으려면</strong>, 이 조항들 꼭! 체크하고 넘어가세요 👀</p>
      </div>
    </aside>

    <section className="section">
      <h2 className="subheading">✅ 1. 서면 계약은 무조건 필수</h2>
      <p>근로기준법상 사장이 서면으로 계약서를 줘야 할 의무가 있어요. 말로만 “시간당 10,000원 줄게”는 안 됩니다.</p>
      <p>서면 계약서가 없으면 나중에 임금 미지급 문제 생겨도 증거가 없어요.</p>
    </section>

    <section className="section">
      <h2 className="subheading">✅ 2. 시급과 수당 명확하게 확인하기</h2>
      <ul className="list">
        <li>기본 시급이 최저임금 이상인지 확인</li>
        <li>주휴수당이 포함된 금액인지 분리된 금액인지 체크</li>
        <li>야간·휴일·연장근무 시 가산수당 규정이 있는지 확인</li>
      </ul>
      <p>💡 예: “시급 11,000원 (주휴수당 포함)”이라는 문구를 조심! 실제 시급은 더 낮을 수 있어요.</p>
    </section>

    <section className="section">
      <h2 className="subheading">✅ 3. 근로시간과 휴게시간</h2>
      <ul className="list">
        <li>하루 몇 시간 일하는지, 주 며칠 근무인지, 중간에 휴식은 어떻게 주어지는지 정확히 써 있는지 확인</li>
        <li>4시간 이상 일하면 30분, 8시간 이상이면 1시간 휴게시간이 있어야 해요</li>
        <li>휴게시간은 ‘근무 중 대기’가 아니라 자유시간이어야 합니다</li>
        <li>특히 탄력적 근로시간제나 선택적 근무제를 운영하는 경우엔 더 자세한 안내가 필요해요!</li>
      </ul>
    </section>

    <section className="section">
      <h2 className="subheading">✅ 4. 수습 기간과 급여 조건</h2>
      <ul className="list">
        <li>수습기간이 있다면, 그 기간과 조건이 명확히 명시돼 있어야 해요</li>
        <li>수습이라고 해도 최저임금 미만 지급은 불법</li>
        <li>수습 3개월 이내면 10% 감액 가능하지만, 그 이상은 안 돼요</li>
      </ul>
    </section>

    <section className="section">
      <h2 className="subheading">✅ 5. 해고 및 중도 퇴사 관련 조항</h2>
      <ul className="list">
        <li>“무단결근 1회 시 자동 해고” 같은 조항은 불합리할 수 있어요</li>
        <li>중도 퇴사 시 위약금 조항이 있는지 체크 (정당하지 않으면 무효 가능)</li>
        <li>퇴사 시 마지막 근무일까지의 임금은 14일 이내에 정산받아야 해요</li>
      </ul>
    </section>

    <section className="section">
      <h2 className="subheading">✅ 6. 계약서 사본 꼭 받기</h2>
      <p>계약서에 서명했으면, 사본은 반드시 사진으로 찍거나 복사해 두세요.</p>
      <p>사본만이 나중에 법적 문제가 발생했을 때 <strong>‘증거’</strong>로 사용될 수 있습니다.</p>
    </section>

    <div role="separator" className="separator" />

    <section className="section">
      <h3>🙋‍♀️ 마무리 꿀팁</h3>
      <ul className="list">
        <li>어려운 용어나 생소한 조항은 물어보거나 검색해서 이해하고 서명하세요</li>
        <li>구두 약속은 꼭 계약서에 적어달라고 하세요</li>
        <li>“다들 이렇게 해요” 같은 말에 휘둘리지 마세요</li>
      </ul>
      <p>첫 알바의 시작을 현명하게 시작하세요! 계약서를 잘 읽고, 이해하고, 보관하는 습관이 평생 갑니다 💼✨</p>
    </section>
  </div>
);

export default PDFFirstAlba;