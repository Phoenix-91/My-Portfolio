import PixelImage from './PixelImage';
import { A } from '@/data/assets';

const EXPERIENCES = [
  {
    role: 'React Developer',
    company: 'The Entrepreneurship Network',
    type: 'Internship',
    duration: 'Apr 2025 – Jul 2025 · 3 months',
    now: false,
  },
];

export default function Experience() {
  return (
    <div className="card" id="experience">
      <h3>Experience</h3>
      <div className="tl">
        {EXPERIENCES.map((e) => (
          <div className="row" key={e.company + e.role}>
            <PixelImage a={A.tenLogo} alt={`${e.company} logo`} />
            <div>
              <strong>{e.company}</strong>
              <span>{e.role} · {e.type}</span>
              <span>{e.duration}</span>
              {e.now && <i className="pill">now</i>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
