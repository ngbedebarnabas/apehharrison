import type { ReactNode } from 'react';

export function VerticalMarquee({
  children,
  className,
  duration = 26,
}: {
  children: ReactNode[];
  className?: string;
  duration?: number;
}) {
  return (
    <div className={`v-marquee${className ? ` ${className}` : ''}`}>
      <div className="v-marquee-track" style={{ animationDuration: `${duration}s` }}>
        {children.map((child, i) => (
          <div className="v-marquee-item" key={`a-${i}`}>
            {child}
          </div>
        ))}
        {children.map((child, i) => (
          <div className="v-marquee-item" aria-hidden="true" key={`b-${i}`}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
