'use client';
import { motion } from 'framer-motion';
import { revealItem } from '@/lib/motion';

export function QuotePlate({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <motion.figure className="quote" variants={revealItem}>
      <b>“</b>
      <blockquote>{quote}</blockquote>
      <figcaption>
        {author}
        <small>{role}</small>
      </figcaption>
    </motion.figure>
  );
}
