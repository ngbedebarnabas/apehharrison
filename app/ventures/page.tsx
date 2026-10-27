import { VentureCard } from '@/components/VentureCard';
import { Reveal } from '@/components/motion/Reveal';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { ventures } from '@/lib/content';

export default function Legacy() {
  return (
    <main>
      <section className="inner-hero compact">
        <Reveal>
          <p className="eyebrow">[THE LEGACY]</p>
          <h1>
            Build what
            <br />
            <em>serves.</em>
          </h1>
          <p className="lead">
            Four expressions of one enduring conviction: institutions should leave people stronger than they found them.
          </p>
        </Reveal>
      </section>
      <section className="band paper">
        <RevealGroup className="wrap venture-grid full">
          {ventures.map((v) => (
            <VentureCard key={v.slug} {...v} />
          ))}
        </RevealGroup>
      </section>
    </main>
  );
}
