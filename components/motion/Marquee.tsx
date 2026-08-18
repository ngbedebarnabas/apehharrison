import type { ReactNode } from 'react';

export function Marquee({
  children,
  className,
  duration = 34,
}: {
  children: ReactNode[];
  className?: string;
  duration?: number;
}) {
  return (
    <div className={`marquee${className ? ` ${className}` : ''}`}>
      <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
        {children.map((child, i) => (
          <span className="marquee-item" key={`a-${i}`}>
            {child}
          </span>
        ))}
        {children.map((child, i) => (
          <span className="marquee-item" aria-hidden="true" key={`b-${i}`}>
            {child}
          </span>
        ))}
      </div>
    </div>
  );
}
