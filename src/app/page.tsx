import TopBar from '@/components/TopBar';
import Cover from '@/components/Cover';
import Hero from '@/components/Hero';
import Academics from '@/components/Academics';
import ArtCard from '@/components/ArtCard';
import DailyQuote from '@/components/DailyQuote';
import About from '@/components/About';
import GithubGraph from '@/components/GithubGraph';
import Socials from '@/components/Socials';
import ClockCard from '@/components/ClockCard';
import PixelImage from '@/components/PixelImage';
import SkillsSection from '@/components/Skills/SkillsSection';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { A } from '@/data/assets';

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="page">
        <Cover />
        <Hero />
        <section className="grid" id="about">
          <aside className="stack" id="academics">
            <Academics />
            <ArtCard />
          </aside>
          <article className="stack">
            <DailyQuote />
            <About />
            <GithubGraph />
          </article>
          <aside className="stack">
            <Socials />
            <ClockCard />
            <PixelImage a={A.bmo} className="bmo-side" />
          </aside>
        </section>
        <hr />
        <SkillsSection />
        <hr />
        <Projects />
        <hr />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
