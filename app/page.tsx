import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ManifestoGrid } from "@/components/ManifestoGrid";
import { QuotePlate } from "@/components/QuotePlate";
import { VentureCard } from "@/components/VentureCard";
import { BookCard } from "@/components/BookCard";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { Marquee } from "@/components/motion/Marquee";
import { ImageSlider } from "@/components/motion/ImageSlider";
import { books, galleryImages, quotes, ventures } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="band dark about-teaser">
        <div className="wrap two-col">
          <Reveal>
            <p className="eyebrow">[ABOUT ARC. APEH HARRISON IWODI]</p>
            <h2>
                A Leader, Mentor
              <br />
              & Changemaker.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              For more than three decades, Apeh Harrison Iwodi has built
              structures of a different kind: people, purpose, and possibilities.
            </p>
            <p>
              Architect, author, educator and mentor, he brings the discipline
              of design to the work of human potential. His conviction is
              simple: every life can become a blueprint for lasting impact, greatness and
              legacy.
            </p>
                      <p>
                          Aa transgenerational leader, visionary architect, humanitarian, author, and educator devoted to empowering young minds and building impactful legacies across generations. A man driven by purpose and guided by compassion, he embodies a rare and powerful blend of creativity, leadership, and service that transforms both people and places.
            </p>
            <Link className="button ghost" href="/about">
              Read Full Story <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="band paper">
        <div className="wrap drive-grid">
          <Reveal className="drive-gallery">
            <ImageSlider images={galleryImages} />
          </Reveal>
          <div className="drive-content">
            <Reveal>
              <p className="eyebrow dark-label">[THE DRIVE BEHIND THE WORK]</p>
              <h2 className="section-title">
                The principles that
                <br />
                outlive the moment.
              </h2>
            </Reveal>
            <ManifestoGrid />
          </div>
        </div>
      </section>
      <section className="band dark quotes-band">
        <div className="wrap">
          <p className="eyebrow">[WORDS THAT INSPIRE]</p>
        </div>
        <Marquee className="quote-marquee">
          {quotes.map((q) => (
            <QuotePlate key={q.author} {...q} />
          ))}
        </Marquee>
      </section>
      <section className="band paper">
        <div className="wrap">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow dark-label">[THE LEGACY]</p>
              <h2 className="section-title">
                Institutions with
                <br />a human centre.
              </h2>
            </div>
            <Link className="text-link" href="/ventures">
              View all offerings →
            </Link>
          </Reveal>
          <RevealGroup className="venture-grid">
            {ventures.map((v) => (
              <VentureCard key={v.slug} {...v} />
            ))}
          </RevealGroup>
        </div>
      </section>
      <section className="band paper books-band">
        <div className="wrap">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow dark-label">[KNOWLEDGE LIBRARY]</p>
              <h2 className="section-title">
                Ideas made
                <br />
                to travel.
              </h2>
            </div>
            <Link className="text-link" href="/books">
              Visit the library →
            </Link>
          </Reveal>
          <RevealGroup className="book-grid">
            {books.map((b) => (
              <BookCard key={b.format} {...b} />
            ))}
          </RevealGroup>
        </div>
      </section>
      <section className="band closing">
        <Reveal className="wrap closing-inner">
          <p className="eyebrow">[THE NEXT CHAPTER]</p>
          <h2>
            Ready to build
            <br />
            what lasts?
          </h2>
          <Link className="button gold" href="/contact">
            Get In Touch <span>→</span>
          </Link>
        </Reveal>
      </section>
    </>
  );
}
