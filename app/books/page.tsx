import { BookCard } from '@/components/BookCard';
import { Reveal } from '@/components/motion/Reveal';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { books } from '@/lib/content';

export default function Books() {
  return (
    <main>
      <section className="inner-hero compact">
        <Reveal>
          <p className="eyebrow">[KNOWLEDGE LIBRARY]</p>
          <h1>
            Ideas worth
            <br />
            <em>returning to.</em>
          </h1>
          <p className="lead">
            Books for people looking to make sense of their purpose, their problems and their place in the world.
          </p>
        </Reveal>
      </section>
      <section className="band paper">
        <RevealGroup className="wrap book-grid">
          {books.map((b) => (
            <BookCard key={b.format} {...b} />
          ))}
        </RevealGroup>
      </section>
      <section className="band dark reader-quote">
        <Reveal className="wrap">
          <p className="eyebrow">[FROM A READER]</p>
          <h2>“A timely reminder that the ordinary, examined with care, is the beginning of extraordinary.”</h2>
          <p>— Reader, Uncommon Common Sense</p>
        </Reveal>
      </section>
    </main>
  );
}
