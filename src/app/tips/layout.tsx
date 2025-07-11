import './style.scss';

export default function TipsLayout({ children }: { children: React.ReactNode }) {
  return <div className="tips-container">{children}</div>;
}