import PixelImage from './PixelImage';
import { A } from '@/data/assets';

const CHIPS = ['full stack', 'AI/ML'];

export default function About() {
  return (
    <div className="card about">
      <PixelImage a={A.long} className="about-garland" />
      <h2>About me</h2>
      <p>Hi, I&apos;m Paramveer Rana, a full stack developer who likes turning ideas into working products, from the interface down to the database. I finished my BCA at Chandigarh University and I&apos;m currently pursuing my MCA there.</p>
      <p>Open to projects and internships where I can build and learn fast.</p>
      <div className="chips">
        {CHIPS.map((c) => <span key={c}>{c}</span>)}
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn" aria-label="Open Resume in new tab">
          📄 Resume ↗
        </a>
      </div>
    </div>
  );
}
