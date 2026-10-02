import PixelImage from './PixelImage';
import { A } from '@/data/assets';

const NAV = [['Home', '#home'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']];

/** Full-width banner (touches both side lines) with the nav box and the swaying plant. */
export default function Cover() {
  return (
    <div className="cover">
      <header className="banner">
        <PixelImage a={A.banner} alt="Pixel art helmet resting in glowing grass" priority />
        <nav className="nav" aria-label="Sections">
          {NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
      </header>
      <PixelImage a={A.hangPlant} className="hang" />
    </div>
  );
}
