'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type GalleryImage = { src: string; alt: string };

export function ImageSlider({
  images,
  interval = 4200,
}: {
  images: GalleryImage[];
  interval?: number;
}) {
  const [layerImages, setLayerImages] = useState<[number, number]>([0, images.length > 1 ? 1 : 0]);
  const [activeLayer, setActiveLayer] = useState<0 | 1>(0);
  const activeRef = useRef<0 | 1>(0);
  const cursorRef = useRef(images.length > 1 ? 2 % images.length : 0);

  const advanceTo = (nextImageIndex: number) => {
    const inactive: 0 | 1 = activeRef.current === 0 ? 1 : 0;
    setLayerImages((current) => {
      const updated: [number, number] = [...current];
      updated[inactive] = nextImageIndex;
      return updated;
    });
    setActiveLayer(inactive);
    activeRef.current = inactive;
  };

  useEffect(() => {
    if (images.length < 2) return;
    const timer = setInterval(() => {
      advanceTo(cursorRef.current);
      cursorRef.current = (cursorRef.current + 1) % images.length;
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="gallery-slider">
      <div className="gallery-frame">
        {layerImages.map((imgIndex, layerI) => (
          <motion.div
            key={layerI}
            className="gallery-slide"
            animate={{ opacity: activeLayer === layerI ? 1 : 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          >
            <Image
              src={images[imgIndex].src}
              alt={images[imgIndex].alt}
              fill
              sizes="(max-width: 900px) 90vw, 40vw"
              priority={layerI === 0}
            />
          </motion.div>
        ))}
      </div>
      <div className="gallery-dots">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === layerImages[activeLayer] ? 'active' : ''}
            aria-label={`Show photo ${i + 1}`}
            onClick={() => {
              advanceTo(i);
              cursorRef.current = (i + 1) % images.length;
            }}
          />
        ))}
      </div>
    </div>
  );
}
