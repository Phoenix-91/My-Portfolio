import { PROJECTS } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <p className="sub">Placeholder entries for now. Swap in your real links in src/data/projects.ts.</p>
      <div className="proj">
        {PROJECTS.map((p) => (
          <div className="card" key={p.title}>
            <div className="thumb">{p.glyph}</div>
            <div className="body">
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="btns">
                <a className="btn live" href={p.live} target="_blank" rel="noopener noreferrer">Live</a>
                <a className="btn" href={p.code} target="_blank" rel="noopener noreferrer">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
