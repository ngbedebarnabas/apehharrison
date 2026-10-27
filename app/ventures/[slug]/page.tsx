import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ventureCtas, ventureGalleries, ventureGalleryTitles, ventureHeroes, ventureIntros, ventures } from '@/lib/content';
import { Reveal } from '@/components/motion/Reveal';
import { Gallery } from '@/components/Gallery';

export default function VentureDetail({ params }: { params: { slug: string } }) {
  const v = ventures.find((x) => x.slug === params.slug);
  if (!v) notFound();
  const gallery = ventureGalleries[v.slug];
  const hero = ventureHeroes[v.slug];
  const intro = ventureIntros[v.slug];
  const cta = ventureCtas[v.slug] ?? { label: 'Work with us', href: '/contact' };
  const isExternal = /^https?:\/\//.test(cta.href);
  return (
    <main>
      <section className={`inner-hero compact${hero ? ' has-bg' : ''}`}>
        {hero && (
          <div className="inner-hero-bg">
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              sizes="100vw"
              priority
              style={hero.position ? { objectPosition: hero.position } : undefined}
            />
          </div>
        )}
        <Reveal className={hero ? 'inner-hero-content' : undefined}>
          <p className="eyebrow">[{v.category}]</p>
          <h1>{v.title}</h1>
          <p className="lead">{v.text}</p>
        </Reveal>
      </section>
      <section className="band paper">
        <Reveal className="wrap prose narrow">
          <p className="eyebrow dark-label">[THE MISSION]</p>
          {intro ? (
            <>
              <h2>{intro.title}</h2>
              <p className="lead">{intro.text}</p>
            </>
          ) : (
            <>
              <h2>Work with a longer view.</h2>
              <p>
                {v.title} exists to turn thoughtful intention into valuable experience. Its work is anchored in the belief that excellence is an act of service—and that a well-built institution can keep serving long after its first builders have moved on.
              </p>
              <p>
                Every initiative is shaped with care for the people it reaches, the place it occupies and the legacy it will leave.
              </p>
            </>
          )}
          {isExternal ? (
            <a href={cta.href} className="button dark-button" target="_blank" rel="noopener noreferrer">
              {cta.label} →
            </a>
          ) : (
            <Link href={cta.href} className="button dark-button">
              {cta.label} →
            </Link>
          )}
        </Reveal>
      </section>
      {gallery && (
        <section className="band dark">
          <div className="wrap">
            <Reveal>
              <p className="eyebrow">[GALLERY]</p>
              <h2 className="section-title gallery-title">{ventureGalleryTitles[v.slug] ?? 'A look inside.'}</h2>
            </Reveal>
            {gallery.map((section, i) => (
              <div key={section.title ?? i} className="gallery-section">
                {section.title && (
                  <Reveal>
                    <h3 className="gallery-section-title">{section.title}</h3>
                  </Reveal>
                )}
                <Gallery images={section.images} />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
