'use client';
import { useState } from 'react';
import PixelImage from '../PixelImage';
import { A } from '@/data/assets';
import { SKILLS } from '@/data/skills';
import InfoPanel from './InfoPanel';
import Keyboard3D from './Keyboard3D';

export default function SkillsSection() {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <section id="skills">
      <div className="card skillcard">
        <h2>Skills</h2>
        <p className="sub">Press any key to see what it is. Move your mouse over the board to tilt it.</p>
        <div className="sg">
          <div className="px kbcase">
            <div className="tb"><i /><i /><i /><span>keyboard</span></div>
            <Keyboard3D onPress={setPicked} />
          </div>
          <div className="infowrap">
            <PixelImage a={A.pikachu} className="pika" />
            <InfoPanel skill={picked === null ? null : SKILLS[picked]} />
            <PixelImage a={A.planet} className="planet" />
          </div>
        </div>
      </div>
    </section>
  );
}
