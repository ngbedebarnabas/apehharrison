'use client';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { easeOut, fadeUp } from '@/lib/motion';

const components = {
  div: motion.div,
  article: motion.article,
  section: motion.section,
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof components;
}) {
  const Component = components[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: easeOut, delay }}
    >
      {children}
    </Component>
  );
}
