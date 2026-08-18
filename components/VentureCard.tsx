'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { hoverLift, revealItem } from '@/lib/motion';

export function VentureCard({
  slug,
  category,
  title,
  text,
  image,
  imagePosition,
}: {
  slug: string;
  category: string;
  title: string;
  text: string;
  image: string;
  imagePosition?: string;
}) {
  return (
    <motion.article className="venture" variants={revealItem} whileHover={hoverLift.whileHover} transition={hoverLift.transition}>
      <div className="venture-image">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          style={{ objectPosition: imagePosition || 'center' }}
        />
      </div>
      <p>{category}</p>
      <h3>{title}</h3>
      <span className="rule" />
      <div className="venture-body">
        <p>{text}</p>
        <Link href={`/legacy/${slug}`}>View Project →</Link>
      </div>
    </motion.article>
  );
}
