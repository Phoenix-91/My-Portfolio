import Image from 'next/image';
import type { Asset } from '@/data/assets';

type Props = { a: Asset; alt?: string; className?: string; priority?: boolean };

/** Static assets from /public/assets. Unoptimized so pixel art and GIFs stay crisp. */
export default function PixelImage({ a, alt = '', className, priority }: Props) {
  return <Image src={a.src} width={a.w} height={a.h} alt={alt} className={className} priority={priority} unoptimized />;
}
