'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { hoverLift, revealItem } from '@/lib/motion';

export function ArticleCard({
  slug,
  category,
  date,
  title,
  text,
}: {
  slug: string;
  category: string;
  date: string;
  title: string;
  text: string;
}) {
  return (
    <motion.article className="article" variants={revealItem} whileHover={hoverLift.whileHover} transition={hoverLift.transition}>
      <p>
        {category}
        <span>{date}</span>
      </p>
      <h2>{title}</h2>
      <div>
        <p>{text}</p>
        <Link href={`/insights/${slug}`}>Read insight →</Link>
      </div>
    </motion.article>
  );
}
