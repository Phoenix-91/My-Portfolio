import PixelImage from './PixelImage';
import { A } from '@/data/assets';

export default function ArtCard() {
  return (
    <div className="card art">
      <PixelImage a={A.forest} alt="Pixel art of a glowing sword in a mossy clearing" />
    </div>
  );
}
