import PixelImage from './PixelImage';
import { A } from '@/data/assets';
import { SITE } from '@/data/site';

export default function Hero() {
  return (
    <>
      <div className="pfp-row">
        <PixelImage a={A.tom} alt="Tom the cat reading a newspaper" className="pfp" />
        {/* Replace public/assets/images/me.png with your own photo */}
        <PixelImage a={A.me} alt={SITE.name} className="me" />
      </div>
      <h1>{SITE.name}</h1>
      <p className="tag">{SITE.tagline}</p>
    </>
  );
}
