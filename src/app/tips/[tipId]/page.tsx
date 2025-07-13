// app/tips/[tipId]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import Tip1 from './1/page';
import Tip2 from './2/page';
import Tip3 from './3/page';

export default function TipPage() {
  const { tipId } = useParams();

  // tipId가 아직 넘어오지 않았을 경우 로딩 UI
  if (!tipId) {
    return <p>Loading…</p>;
  }

  // tipId 별로 컴포넌트 분기
  switch (tipId) {
    case '1':
      return <Tip1 />;
    case '2':
      return <Tip2 />;
    case '3':
      return <Tip3 />;
    default:
      return <p>⚠️ 페이지를 찾을 수 없습니다.</p>;
  }
}
