import React from 'react';
import Image from 'next/image';

const ContractClauses: React.FC = () => (
  <div className="container">
    <h1 className="heading">💡사회 초년생이 가장 많이 오해하는 계약 조항들</h1>
    <div className="note">
      <div className="imoji">👀</div>
      <div className="text">
        <p>계약서에는 비슷해 보이지만 의미가 전혀 다른 용어들이 많아요.</p>
        <p>자칫 잘못 해석하면 큰 손해를 볼 수 있는 대표 조항들을 정리했어요.</p>
      </div>
    </div>

    <section className="section">
      <br />
      <h2 className="subheading">📍포괄 임금제</h2>
      <div className="description">
        <p>기본급에 <strong>연장/야간/휴일 근로수당을 포함</strong>하여, <strong>사전에 미리 지급하는 임금 지급 방식</strong></p>
      </div>
      <p>원칙적으로 사용자는 근로자의 시간외근로가 발생할 때마다 해당 시간 분의 가산수당을 지급해야 하는데요. 하지만 포괄임금제를 사용할 경우에는 근로자가 수행할 것이라 예상되는 시간외근로에 대한 가산수당을 먼저 지급할 수 있어요.</p>
      <br />
      <h3>📏 조건</h3>
      <ul className="list">
        <li><strong>근로자 동의 필요</strong> (근로계약서에 명시되어야 하며, 불이익 없어야 함)</li>
        <li>시간외 수당 포함 금액이 <strong>실제 계산한 가산수당보다 작으면 차액 지급</strong>해야 해요.</li>
      </ul>
      <br />
      <h3>📝 계약서 작성 시 유의점</h3>
      <ul className="list">
        <li>&quot;월급 300만 원 (기본급 250만 + 연장/야간/휴일 수당 포함)&quot; 등 <strong>명확한 구조 기재 필요</strong></li>
        <li>포함된 수당 요소, 계산 기준, 시간 외 포함범위 등을 자세히 기술해야 해요.</li>
      </ul>
      <br />
      <h3>❓ 자주 묻는 질문</h3>
      <p className="question">포괄임금계약을 맺어도 근로자에게 초과근무수당을 지급해야 하나요?</p>
      <p>사용자가 근로자와 유효한 포괄임금제 계약을 체결했다면, 근로자가 포괄임금 계약 시간보다 더 근로하였어도 그에 따른 가산수당을 지급하지 않아도 됩니다.</p>
      <p>단, <u>포괄임금에 포함된 금액이 법적 기준보다 낮으면</u>, 차액을 추가 지급해야 해요.</p>
      <br />
      <p className="question">휴일⋅휴가에 따른 임금도 포괄임금에 포함할 수 있나요?</p>
      <p>근로자가 실제 휴일·휴가에서 발생할 임금만 <strong>포괄임금에 포함할 수 있어요.</strong><br />
        이때 사용자가 근로자에게 포괄임금을 통해 휴일⋅휴가에 대한 고정수당을 지급했다는 이유로 근로자의 휴가 사용을 억제한다면 근로기준법을 위반하는 것이 되므로 주의해야 해요.</p>
    </section>

    <section className="section">
      <h2 className="subheading">📍수습 기간</h2>
      <div className="description">
        <p>수습이란, <strong>확정적 근로계약을 체결한 후 근로자의 작업 능력이나 사업장에서의 업무 능력 훈련을 위한 근로형태</strong>를 의미해요. 많은 기업에서 3개월의 수습기간을 두고 있지만, 이 기간은 법적으로 정해져 있지는 않아요.</p>
      </div>
      <br />
      <h3>💰 임금 (최저임금 감액 규정)</h3>
      <ul className="list">
        <li>1년 이상 근로계약 & 수습기간 3개월 이내인 경우, 최저임금의 90% <strong>지급 가능</strong></li>
        <li>단, <strong>1년 미만 계약자·단순노무직</strong>은 감액 대상에서 제외되며 100% 지급해야 해요.</li>
      </ul>
      <br />
      <h3>📩 해고 규정</h3>
      <ul className="list">
        <li>수습 근로자(3개월 미만)는 30일 예고 없이 즉시 해고 가능.</li>
        <li>다만 &quot;합리적 이유 + 서면 통보 + 객관적 증거&quot;가 필요하며, 절차를 지키지 않으면 <strong>부당해고</strong> 여지가 있어요.</li>
      </ul>
    </section>
    <div
      role="separator"
      className={"separator"}
    />
    <br />
    <section className="section">
      <h2 className="subheading">📍위약금 vs 손해배상금</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="th">구분</th>
            <th className="th">위약금</th>
            <th className="th">손해배상금</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td">정의</td>
            <td className="td">계약을 위반할 경우 미리 정한 금액을 지불하는 것</td>
            <td className="td">실제 발생한 손해를 입증해 청구하는 것</td>
          </tr>
          <tr>
            <td className="td">계산 방식</td>
            <td className="td">계약서에 명시된 정액</td>
            <td className="td">실제 피해를 기준으로 산정</td>
          </tr>
          <tr>
            <td className="td">중요 포인트</td>
            <td className="td">위약금은 과도하면 무효될 수 있음 (민법상 제한 있음)</td>
            <td className="td"></td>
          </tr>
        </tbody>
      </table>
      <p> <mark className="highlight">해약금</mark>과 <mark className="highlight">위약금</mark>은 법적 성격에서 구분해요. 해약금은 계약 해제 용도, 위약금은 계약 위반 보전 목적이에요. <a
        href="https://www.hankyung.com/article/202206078042Q?utm_source=chatgpt.com"
        className="link-mention"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="link-icon"
          src="/link-icon.svg"
          alt="링크 아이콘"
          width={16}
          height={16}
        />
        <span className="link-text">www.hankyung.com</span>
      </a></p>
    </section>
    <br />
    <div
      role="separator"
      className={"separator"}
    />
    <br />

    <section className="section">
      <h2 className="subheading">📍고용계약 vs 도급계약</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="th">구분</th>
            <th className="th">고용계약</th>
            <th className="th">도급계약</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td">차이</td>
            <td className="td">사용자의 지시에 따라 일함 (근로자)</td>
            <td className="td">결과만 제공하면 됨 (자영업자 또는 프리랜서)</td>
          </tr>
          <tr>
            <td className="td">보호법</td>
            <td className="td">근로기준법 적용</td>
            <td className="td">적용 안 됨</td>
          </tr>
          <tr>
            <td className="td">주의</td>
            <td className="td">도급계약서를 주면서 &apos;직원처럼 일해달라&apos;는 경우 불법일 수 있음</td>
            <td className="td"></td>
          </tr>
        </tbody>
      </table>
    </section>
    <br />
    <div
      role="separator"
      className={"separator"}
    />
    <br />

    <section className="section">
      <h2 className="subheading">📍해지 vs 해제</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="th"></th>
            <th className="th">해지</th>
            <th className="th">해제</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td"><strong>의미</strong></td>
            <td className="td">유효 계약을 종료시키는 조치</td>
            <td className="td">계약 전부를 소급해 원천 무효로 돌리는 조치</td>
          </tr>
          <tr>
            <td className="td"><strong>효과</strong></td>
            <td className="td">기 발생된 권리·의무 유지, &apos;앞으로만&apos; 효력 상실</td>
            <td className="td">계약 전 처음부터 없던 것처럼 처리됨</td>
          </tr>
          <tr>
            <td className="td"><strong>예시</strong></td>
            <td className="td">&quot;계약 1개월 전 해지 통보 필요&quot;</td>
            <td className="td">&quot;체결 후 7일 내 일방 해제 가능&quot;</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
);

export default ContractClauses;
