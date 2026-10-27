'use client';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { easeOut } from '@/lib/motion';
import type { GalleryImage } from '@/lib/content';

export function Gallery({ images, columns = 3 }: { images: GalleryImage[]; columns?: number }) {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const open = active !== null;

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: number) => setActive((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const trigger = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.querySelector<HTMLElement>('.lightbox-close')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [open, close, step]);

  const current = active === null ? null : images[active];

  return (
    <>
      <div className="gallery-grid" style={{ '--gallery-cols': columns } as CSSProperties}>
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            className="gallery-tile"
            aria-haspopup="dialog"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: easeOut, delay: (i % 3) * 0.08 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes={`(max-width: 900px) 50vw, ${Math.round(100 / columns)}vw`}
            />
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {current && active !== null && (
          <motion.div
            ref={dialogRef}
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          >
            <button type="button" className="lightbox-btn lightbox-close" aria-label="Close gallery" onClick={close}>
              ×
            </button>
            <button
              type="button"
              className="lightbox-btn lightbox-prev"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
            >
              ←
            </button>
            <button
              type="button"
              className="lightbox-btn lightbox-next"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
            >
              →
            </button>
            <motion.figure
              key={active}
              className="lightbox-figure"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: easeOut }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                sizes="92vw"
                style={{ '--ar': current.width / current.height } as CSSProperties}
                priority
              />
            </motion.figure>
            <div className="lightbox-count">
              {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
