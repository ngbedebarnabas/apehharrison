import Image from 'next/image';
import { BookCard } from '@/components/BookCard';
import { Gallery } from '@/components/Gallery';
import { Reveal } from '@/components/motion/Reveal';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { books, booksGallery, booksHero } from '@/lib/content';

export default function Books() {
  return (
    <main>
      <section className="inner-hero compact has-bg">
        <div className="inner-hero-bg">
          <Image
            src={booksHero.src}
            alt={booksHero.alt}
            fill
            sizes="100vw"
            priority
            style={{ objectPosition: booksHero.position }}
          />
        </div>
        <Reveal className="inner-hero-content">
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
      <section className="band dark gallery-band">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">[GALLERY]</p>
            <h2 className="section-title gallery-title">Moments with the book.</h2>
          </Reveal>
          <Gallery images={booksGallery} columns={4} />
        </div>
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
