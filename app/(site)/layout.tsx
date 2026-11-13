import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar title="Paramveer's Portfolio" />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <main className="min-w-0 flex-1 pb-12">{children}</main>
      </div>
    </>
  );
}
