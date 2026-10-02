'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SKILLS } from '@/data/skills';
import { ICONS } from '@/data/icons';
import { playClick } from '@/lib/keySound';
import type { Skill } from '@/types';

type Key = { i: number; g: THREE.Group; m: THREE.MeshPhysicalMaterial; lm: THREE.MeshBasicMaterial; h: number; ht: number; t: number };

const BT = 0.09, KH = 0.56, PITCH = 1.25, CAP = 1.08, COLS = 6, ROWS = 4, BY = 0.98;
const FONT = 'system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';

function roundRect(w: number, d: number, r: number) {
  const s = new THREE.Shape(), x = -w / 2, y = -d / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + d - r); s.quadraticCurveTo(x + w, y + d, x + w - r, y + d);
  s.lineTo(x + r, y + d); s.quadraticCurveTo(x, y + d, x, y + d - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function label(s: Skill) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const x = c.getContext('2d')!, col = s.fg ?? '#fff';
  if (s.icon === 'cicd') {
    x.strokeStyle = col; x.lineWidth = 15; x.lineCap = 'round'; x.beginPath();
    for (let i = 0; i <= 120; i++) {
      const a = (i / 120) * Math.PI * 2, q = 1 + Math.sin(a) ** 2;
      const px = 128 + (74 * Math.cos(a)) / q, py = 84 + (74 * Math.sin(a) * Math.cos(a) / q) * 1.5;
      if (i) x.lineTo(px, py); else x.moveTo(px, py);
    }
    x.closePath(); x.stroke();
  } else {
    x.save(); x.translate(58, 14); x.scale(140 / 24, 140 / 24); x.fillStyle = col; x.fill(new Path2D(ICONS[s.icon])); x.restore();
  }
  x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = col; x.globalAlpha = 0.92;
  let fs = 32;
  do { x.font = `600 ${fs}px ${FONT}`; fs--; } while (x.measureText(s.name).width > 222 && fs > 14);
  x.fillText(s.name, 128, 216);
  const t = new THREE.CanvasTexture(c);
  t.encoding = THREE.sRGBEncoding; t.anisotropy = 8;
  return t;
}

/** The interactive 3D keyboard. Every key is a skill; pressing one reports its index. */
export default function Keyboard3D({ onPress }: { onPress: (i: number) => void }) {
  const host = useRef<HTMLDivElement>(null);
  const cb = useRef(onPress);
  cb.current = onPress;

  useEffect(() => {
    const el = host.current!;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    const cv = renderer.domElement;
    cv.setAttribute('role', 'img');
    cv.setAttribute('aria-label', 'Interactive mechanical keyboard; each key is a developer skill. Click a key to press it.');
    el.appendChild(cv);

    const scene = new THREE.Scene(), camera = new THREE.PerspectiveCamera(35, 1, 0.1, 200);
    scene.add(new THREE.HemisphereLight(0xdfe6ff, 0x1a1c2a, 0.42));
    const sun = new THREE.DirectionalLight(0xffffff, 0.85);
    sun.position.set(-5, 14, 8); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -0.0006; sun.shadow.radius = 5;
    Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9, near: 1, far: 40 });
    scene.add(sun);
    const rim = new THREE.DirectionalLight(0x8fa8ff, 0.3);
    rim.position.set(8, 5, -6); scene.add(rim);

    const capG = new THREE.ExtrudeBufferGeometry(roundRect(CAP - 2 * BT, CAP - 2 * BT, 0.2), { depth: KH, bevelEnabled: true, bevelThickness: BT, bevelSize: BT, bevelSegments: 5, curveSegments: 8 });
    capG.rotateX(-Math.PI / 2);
    const pos = capG.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const f = 1 - 0.15 * ((pos.getY(i) + BT) / (KH + 2 * BT));
      pos.setX(i, pos.getX(i) * f); pos.setZ(i, pos.getZ(i) * f);
    }
    capG.computeVertexNormals();

    const W = COLS * PITCH + 0.95, D = ROWS * PITCH + 0.95;
    const kb = new THREE.Group();
    kb.rotation.y = -0.55; scene.add(kb);
    const caseM = new THREE.Mesh(new THREE.ExtrudeBufferGeometry(roundRect(W, D, 0.55), { depth: 0.75, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.08, bevelSegments: 5 }).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x1b1c20, roughness: 0.42, metalness: 0.4 }));
    caseM.castShadow = caseM.receiveShadow = true; kb.add(caseM);
    const plate = new THREE.Mesh(new THREE.ShapeBufferGeometry(roundRect(W - 0.4, D - 0.4, 0.4)).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x08080a, roughness: 0.9 }));
    plate.position.y = 0.84; plate.receiveShadow = true; kb.add(plate);

    const keys: Key[] = [], bodies: THREE.Mesh[] = [];
    SKILLS.forEach((s, i) => {
      const c = i < 20 ? i % 5 : 5, r = i < 20 ? Math.floor(i / 5) : i - 20, g = new THREE.Group();
      g.position.set((c - (COLS - 1) / 2) * PITCH, BY, (r - (ROWS - 1) / 2) * PITCH);
      const lin = new THREE.Color(s.color).convertSRGBToLinear();
      const m = new THREE.MeshPhysicalMaterial({ color: lin, roughness: 0.5, clearcoat: 0.2, clearcoatRoughness: 0.4, emissive: lin, emissiveIntensity: 0 });
      const b = new THREE.Mesh(capG, m); b.castShadow = b.receiveShadow = true; g.add(b);
      const lm = new THREE.MeshBasicMaterial({ map: label(s), transparent: true, toneMapped: false, color: 0xffffff });
      const p = new THREE.Mesh(new THREE.PlaneBufferGeometry(0.74, 0.74), lm);
      p.rotation.x = -Math.PI / 2; p.position.y = KH + BT + 0.004; g.add(p);
      const k: Key = { i, g, m, lm, h: 0, ht: 0, t: -1 };
      b.userData.k = k; bodies.push(b); keys.push(k); kb.add(g);
    });

    const sh = new THREE.Mesh(new THREE.PlaneBufferGeometry(80, 80).rotateX(-Math.PI / 2), new THREE.ShadowMaterial({ opacity: 0.5 }));
    sh.position.y = -0.09; sh.receiveShadow = true; scene.add(sh);
    const cc = document.createElement('canvas'); cc.width = cc.height = 128;
    const cx = cc.getContext('2d')!, gr = cx.createRadialGradient(64, 64, 6, 64, 64, 64);
    gr.addColorStop(0, 'rgba(0,0,0,.7)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); cx.fillStyle = gr; cx.fillRect(0, 0, 128, 128);
    const blob = new THREE.Mesh(new THREE.PlaneBufferGeometry(15, 11).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cc), transparent: true, depthWrite: false }));
    blob.position.y = -0.085; scene.add(blob);

    const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
    let mx = 0, my = 0, hov: Key | null = null;
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pick = (e: PointerEvent): Key | null => {
      const r = cv.getBoundingClientRect();
      ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -(((e.clientY - r.top) / r.height) * 2 - 1));
      ray.setFromCamera(ndc, camera);
      const h = ray.intersectObjects(bodies, false)[0];
      return h ? (h.object.userData.k as Key) : null;
    };
    const onMove = (e: PointerEvent) => {
      const n = pick(e); mx = ndc.x; my = ndc.y;
      if (n !== hov) { if (hov) hov.ht = 0; if (n) n.ht = 1; hov = n; cv.style.cursor = n ? 'pointer' : 'default'; }
    };
    const onLeave = () => { if (hov) hov.ht = 0; hov = null; mx = my = 0; };
    const onDown = (e: PointerEvent) => {
      const k = pick(e);
      if (!k) return;
      k.t = performance.now(); playClick(); cb.current(k.i);
      if (hov && hov !== k) hov.ht = 0;
      hov = k; k.ht = 1;
    };
    cv.addEventListener('pointermove', onMove); cv.addEventListener('pointerleave', onLeave); cv.addEventListener('pointerdown', onDown);

    const fit = () => {
      const w = el.clientWidth, h = el.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      const th = Math.tan(THREE.MathUtils.degToRad(17.5)) * camera.aspect;
      const d = Math.max(6.6 / th, 9) * 1.45;
      camera.position.set(0, d * 0.78, d * 0.62); camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(fit); ro.observe(el); fit();

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min(clock.getDelta(), 0.05), now = performance.now(), a = 1 - Math.exp(-dt * 14);
      for (const k of keys) {
        k.h += (k.ht - k.h) * a;
        let d = 0, f = 0;
        if (k.t >= 0) {
          const e = (now - k.t) / 1000;
          if (e < 0.07) { const u = e / 0.07; d = 1 - (1 - u) * (1 - u); }
          else if (e < 0.27) { const u = (e - 0.07) / 0.2; d = (1 - u) * (1 - u); }
          else k.t = -1;
          f = Math.max(0, 1 - e / 0.4);
        }
        k.g.position.y = BY + k.h * 0.09 - d * 0.3;
        k.m.emissiveIntensity = k.h * 0.22 + f * 0.5;
        k.lm.color.setScalar(0.94 + 0.06 * k.h);
      }
      const ty = still ? 0 : mx * 0.12, tx = still ? 0 : my * 0.06;
      kb.rotation.y += (-0.55 + ty - kb.rotation.y) * 0.06;
      kb.rotation.x += (tx - kb.rotation.x) * 0.06;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf); ro.disconnect();
      cv.removeEventListener('pointermove', onMove); cv.removeEventListener('pointerleave', onLeave); cv.removeEventListener('pointerdown', onDown);
      renderer.dispose(); renderer.forceContextLoss();
      if (cv.parentNode === el) el.removeChild(cv);
    };
  }, []);

  return <div ref={host} className="kbstage" />;
}
