import Image from "next/image";
import type { Photo as PhotoT } from "@/data/photos";

type Props = {
  photo: PhotoT;
  ratio: string; // CSS aspect-ratio, e.g. "4 / 5" — varied crops, not a uniform card grid
  sizes: string;
  priority?: boolean;
  parallax?: number;
  caption?: string;
  position?: string; // object-position
  className?: string;
};

export default function Photo({ photo, ratio, sizes, priority, parallax = 0.06, caption, position, className = "" }: Props) {
  return (
    <figure className={`ph ${className}`} style={{ aspectRatio: ratio }} data-parallax={parallax}>
      <div className="ph__in">
        <Image className="ph__img" src={photo.src} width={photo.w} height={photo.h} alt={photo.alt} sizes={sizes} priority={priority} quality={72} style={position ? { objectPosition: position } : undefined} />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
