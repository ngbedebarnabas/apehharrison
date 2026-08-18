import Image from 'next/image';
import type { ReactNode } from 'react';
import { Reveal } from '@/components/motion/Reveal';

export function ZCard({
  image,
  alt,
  reverse,
  children,
}: {
  image: string;
  alt: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <Reveal className={`z-card${reverse ? ' z-reverse' : ''}`}>
      <div className="z-image">
        <Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
      </div>
      <div className="z-text">{children}</div>
    </Reveal>
  );
}
