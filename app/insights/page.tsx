import { ArticleCard } from '@/components/ArticleCard';
import { Reveal } from '@/components/motion/Reveal';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { articles } from '@/lib/content';

export default function Insights() {
  return (
    <main>
      <section className="inner-hero compact">
        <Reveal>
          <p className="eyebrow">[INSIGHTS]</p>
          <h1>
            A library of
            <br />
            <em>considered thought.</em>
          </h1>
          <p className="lead">
            Notes on leadership, legacy and the quiet work of becoming more useful to the world.
          </p>
        </Reveal>
      </section>
      <section className="band paper">
        <RevealGroup className="wrap article-grid">
          {articles.map((a) => (
            <ArticleCard key={a.slug} {...a} />
          ))}
        </RevealGroup>
      </section>
    </main>
  );
}
