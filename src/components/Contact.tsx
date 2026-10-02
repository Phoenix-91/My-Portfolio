import PixelImage from './PixelImage';
import { A } from '@/data/assets';
import { SITE } from '@/data/site';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="card callout" style={{ marginTop: 56 }}>
        <PixelImage a={A.pot} className="pot" />
        <div className="em">✉️</div>
        <div>
          <p style={{ margin: '0 0 10px' }}>Got a project, internship or just want to say hi? My inbox is open.</p>
          <div className="btns">
            <a className="btn live" href={SITE.email}>Email me</a>
            <a className="btn" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn" href={SITE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
