'use client';
import { motion } from 'framer-motion';
import { revealItem } from '@/lib/motion';

export function MilestoneCard({ year, title, text }: { year: string; title: string; text: string }) {
  return (
    <motion.article variants={revealItem}>
      <span>{year}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </motion.article>
  );
}
