const CHIPS = ['full stack', 'web', 'problem solving', 'open source'];

export default function About() {
  return (
    <div className="card about">
      <h2>About me</h2>
      <p>Hi, I&apos;m Paramveer Rana, a full stack developer who likes turning ideas into working products, from the interface down to the database. I finished my BCA at Chandigarh University and I&apos;m currently pursuing my MCA there.</p>
      <p>Open to projects and internships where I can build and learn fast.</p>
      <div className="chips">{CHIPS.map((c) => <span key={c}>{c}</span>)}</div>
    </div>
  );
}
