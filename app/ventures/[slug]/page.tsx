import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ventures } from '@/lib/content';
import { Reveal } from '@/components/motion/Reveal';

export default function VentureDetail({ params }: { params: { slug: string } }) {
  const v = ventures.find((x) => x.slug === params.slug);
  if (!v) notFound();
  return (
    <main>
      <section className="inner-hero compact">
        <Reveal>
          <p className="eyebrow">[{v.category}]</p>
          <h1>{v.title}</h1>
          <p className="lead">{v.text}</p>
        </Reveal>
      </section>
      <section className="band paper">
        <Reveal className="wrap prose narrow">
          <p className="eyebrow dark-label">[THE MISSION]</p>
          <h2>Work with a longer view.</h2>
          <p>
            {v.title} exists to turn thoughtful intention into valuable experience. Its work is anchored in the belief that excellence is an act of service—and that a well-built institution can keep serving long after its first builders have moved on.
          </p>
          <p>
            Every initiative is shaped with care for the people it reaches, the place it occupies and the legacy it will leave.
          </p>
          <Link href="/contact" className="button dark-button">
            Work with us →
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
