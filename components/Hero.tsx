'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { easeOut } from '@/lib/motion';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero-image" style={{ y: imageY }}>
        <Image
          src="/images/apeh-harrison-hero.jpg"
          alt="Apeh Harrison Iwodi"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="hero-shade" />
      <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          TRANS­GENERATIONAL LEADER · ARCHITECT · AUTHOR
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
        >
          APEH
          <br />
          <em>HARRISON</em>
        </motion.h1>
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOut, delay: 0.2 }}
        >
          <p>
            Building people, purpose,
            <br />
            and posterity.
          </p>
          <Link className="button gold" href="/about">
            About Apeh Harrison <span>→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
