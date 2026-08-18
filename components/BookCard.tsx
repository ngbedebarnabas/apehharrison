'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { hoverLift, revealItem } from '@/lib/motion';

export function BookCard({
  title,
  format,
  price,
  text,
  image,
  link,
}: {
  title: string;
  format: string;
  price: string;
  text: string;
  image: string;
  link: string;
}) {
  return (
    <motion.article className="book" variants={revealItem} whileHover={hoverLift.whileHover} transition={hoverLift.transition}>
      <div className="cover">
        <Image src={image} alt={title} fill sizes="(max-width: 900px) 100vw, 33vw" />
      </div>
      <p className="book-format">{format}</p>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="book-buy">
        <strong>{price}</strong>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Buy Now →
        </a>
      </div>
    </motion.article>
  );
}
