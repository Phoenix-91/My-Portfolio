'use client';
import { useEffect, useState, type CSSProperties } from 'react';
import type { Skill } from '@/types';
import SkillIcon from './SkillIcon';

/** Pixel-style window that types out the info of the pressed key. */
export default function InfoPanel({ skill }: { skill: Skill | null }) {
  const [text, setText] = useState('');
  useEffect(() => {
    if (!skill) { setText(''); return; }
    const full = skill.desc;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setText(full); return; }
    let k = 0;
    setText('');
    const id = setInterval(() => {
      setText(full.slice(0, ++k));
      if (k >= full.length) clearInterval(id);
    }, 14);
    return () => clearInterval(id);
  }, [skill]);

  const chip = { '--k': skill?.color, '--f': skill?.fg } as CSSProperties;
  return (
    <div className="px info" aria-live="polite">
      <div className="tb"><i /><i /><i /><span>skill.info</span></div>
      <div className="ib">
        <div className="head">
          <span className="chip" style={chip}>{skill && <SkillIcon name={skill.icon} />}</span>
          <div>
            <strong>{skill ? skill.name : 'Press a key'}</strong>
            <em>{skill ? skill.type : 'pick any skill'}</em>
          </div>
        </div>
        <p id="idesc">{text}</p>
      </div>
    </div>
  );
}
