'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { easeOut } from '@/lib/motion';

const links = [
  ['About', '/about'],
  ['Legacy', '/legacy'],
  ['Books', '/books'],
  ['Speaking', '/speaking'],
  ['Insights', '/insights'],
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      className={`nav${scrolled ? ' nav-scrolled' : ''}`}
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      <Link className="brand" href="/">
        <Image
          className="crest"
          src="/images/apeh-crest.jpg"
          alt="Apeh Harrison crest"
          width={46}
          height={46}
          priority
        />
        <span>
          <small>Arc. APEH HARRISON</small>
        </span>
      </Link>
      <button
        className="menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? '×' : '☰'}
      </button>
      <nav className={open ? 'open' : ''}>
        {links.map(([name, path]) => (
          <Link onClick={() => setOpen(false)} key={name} href={path}>
            {name}
          </Link>
        ))}
      </nav>
      <Link className="button gold nav-cta" href="/contact">
        Connect <span>→</span>
      </Link>
    </motion.header>
  );
}
