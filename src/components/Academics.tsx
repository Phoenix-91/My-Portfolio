import PixelImage from './PixelImage';
import { A } from '@/data/assets';

const ENTRIES = [
  { degree: 'BCA', years: '2023 – 2026', now: false },
  { degree: 'MCA', years: '2026 – 2028', now: true },
];

export default function Academics() {
  return (
    <div className="card acad-card">
      <PixelImage a={A.cap} className="grad-cap" />
      <h3>Academics</h3>
      <div className="tl">
        {ENTRIES.map((e) => (
          <div className="row" key={e.degree}>
            <PixelImage a={A.cuLogo} alt="Chandigarh University logo" />
            <div>
              <strong>Chandigarh University</strong>
              <span>{e.degree}</span>
              <span>{e.years}</span>
              {e.now && <i className="pill">now</i>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
