import type { ReactNode } from 'react';
import Art from './Art';

const SKY = 'linear-gradient(180deg,#080c1a,#1b2342 65%,#0e1325)';

export default function PageHeader({ icon, title, sub, action, avatar = 'photo' }: { icon: ReactNode; title: string; sub?: string; action?: ReactNode; avatar?: 'photo' | 'code' }) {
  return (
    <>
      <Art src="/images/banner.gif" pixelated position="center 40%" fallback={SKY} className="h-[130px] lg:h-[150px]" />
      <div className="px-5 sm:px-9">
        {avatar === 'code'
          ? <div className="-mt-10 grid h-[80px] w-[80px] place-items-center rounded-2xl border-[3px] border-bg bg-[#14141c] font-mono text-xl font-semibold text-[#4d8dff]">{'</>'}</div>
          : <Art src="/images/avatar.png" fallback="linear-gradient(135deg,#2c2c34,#18181d)" className="-mt-10 h-[80px] w-[80px] rounded-2xl border-[3px] border-bg" />}
        <div className="mb-5 mt-3 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="flex items-center gap-3 text-[30px] font-bold leading-tight"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#2a2a31]">{icon}</span>{title}</h1>
            {sub && <p className="mt-1.5 text-[13px] text-mut">{sub}</p>}
          </div>
          {action}
        </div>
      </div>
    </>
  );
}
