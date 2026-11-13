import type { ReactNode } from 'react';

/** Background image with a dark-gradient fallback, so missing PNGs still look intentional. */
export default function Art({ src, className = '', fallback = 'linear-gradient(135deg,#1a1a2e,#0d0d16)', pixelated = false, position = 'center', children }: { src: string; className?: string; fallback?: string; pixelated?: boolean; position?: string; children?: ReactNode }) {
  return (
    <div className={`bg-cover bg-center ${className}`} style={{ backgroundImage: `url(${src}), ${fallback}`, backgroundPosition: position, imageRendering: pixelated ? 'pixelated' : undefined }}>
      {children}
    </div>
  );
}
