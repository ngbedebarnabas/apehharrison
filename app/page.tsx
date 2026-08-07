import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ManifestoGrid } from "@/components/ManifestoGrid";
import { QuotePlate } from "@/components/QuotePlate";
import { VentureCard } from "@/components/VentureCard";
import { BookCard } from "@/components/BookCard";
import { books, quotes, ventures } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="band dark about-teaser">
        <div className="wrap two-col">
          <div>
            <p className="eyebrow">[ABOUT ARC. APEH HARRISON IWODI]</p>
            <h2>
              An Architect
              <br />
              of Destinies.
            </h2>
          </div>
          <div>
            <p className="lead">
              For more than three decades, Apeh Harrison Iwodi has built
              structures of a different kind: people, purpose, and possibility.
            </p>
            <p>
              Architect, author, educator and mentor, he brings the discipline
              of design to the work of human potential. His conviction is
              simple: every life can become a blueprint for lasting impact and
              greatness.
            </p>
            <Link className="button ghost" href="/about">
              Read Full Story <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="band paper">
        <div className="wrap">
          <p className="eyebrow dark-label">[THE DRIVE BEHIND THE WORK]</p>
          <h2 className="section-title">
            The principles that
            <br />
            outlive the moment.
          </h2>
          <ManifestoGrid />
        </div>
      </section>
      <section className="band dark">
        <div className="wrap">
          <p className="eyebrow">[WORDS THAT INSPIRE]</p>
          <div className="quote-grid">
            {quotes.map((q) => (
              <QuotePlate key={q.author} {...q} />
            ))}
          </div>
        </div>
      </section>
      <section className="band paper">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark-label">[THE LEGACY]</p>
              <h2 className="section-title">
                Institutions with
                <br />a human centre.
              </h2>
            </div>
            <Link className="text-link" href="/legacy">
              View all offerings ↗
            </Link>
          </div>
          <div className="venture-grid">
            {ventures.map((v) => (
              <VentureCard key={v.slug} {...v} />
            ))}
          </div>
        </div>
      </section>
      <section className="band paper books-band">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow dark-label">[KNOWLEDGE LIBRARY]</p>
              <h2 className="section-title">
                Ideas made
                <br />
                to travel.
              </h2>
            </div>
            <Link className="text-link" href="/books">
              Visit the library ↗
            </Link>
          </div>
          <div className="book-grid">
            {books.map((b) => (
              <BookCard key={b.title} {...b} />
            ))}
          </div>
        </div>
      </section>
      <section className="band closing">
        <div className="wrap closing-inner">
          <p className="eyebrow">[THE NEXT CHAPTER]</p>
          <h2>
            Ready to build
            <br />
            what lasts?
          </h2>
          <Link className="button gold" href="/contact">
            Get In Touch <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
