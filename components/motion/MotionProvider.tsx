'use client';
import { MotionConfig } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

/**
 * framer-motion's own reducedMotion="user" detection queries
 * `(prefers-reduced-motion)` without the `: reduce` value, which per the
 * CSS spec matches true in nearly every browser regardless of the user's
 * actual preference — silently snapping all animations to their end state.
 * This does the correct check manually instead.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return <MotionConfig reducedMotion={reduced ? 'always' : 'never'}>{children}</MotionConfig>;
}
