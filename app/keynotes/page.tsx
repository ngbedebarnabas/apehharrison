import Image from 'next/image';
import { Gallery } from '@/components/Gallery';
import { Reveal } from '@/components/motion/Reveal';
import { keynoteGallery, keynoteHero } from '@/lib/content';

const topics = ['Leadership that lasts', 'Building teams with purpose', 'Problem power', 'The architecture of influence'];

export default function Keynotes() {
  return (
    <main>
      <section className="inner-hero has-bg">
        <div className="inner-hero-bg">
          <Image
            src={keynoteHero.src}
            alt={keynoteHero.alt}
            fill
            sizes="100vw"
            priority
            style={{ objectPosition: keynoteHero.position }}
          />
        </div>
        <Reveal className="inner-hero-content">
          <p className="eyebrow">[KEYNOTES]</p>
          <h1>
            Words that
            <br />
            <em>move work.</em>
          </h1>
          <p className="lead">
            Keynotes, conversations and learning rooms for organisations ready to do their most meaningful work.
          </p>
        </Reveal>
      </section>
      <section className="band paper">
        <div className="wrap two-col prose">
          <Reveal>
            <p className="eyebrow dark-label">[SPEAKING TOPICS]</p>
            <h2>Make the room matter.</h2>
          </Reveal>
          <Reveal delay={0.1} className="topic-list">
            {topics.map((topic, i) => (
              <p key={topic}>
                <span>0{i + 1}.</span>
                {topic}
              </p>
            ))}
          </Reveal>
        </div>
      </section>
      <section className="band dark">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">[GALLERY]</p>
            <h2 className="section-title gallery-title">Moments on stage.</h2>
          </Reveal>
          <Gallery images={keynoteGallery} />
        </div>
      </section>
      <section className="band paper">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow dark-label">[BOOK AN ENGAGEMENT]</p>
            <h2 className="section-title">
              Invite a conversation
              <br />
              that continues.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="form">
            <input placeholder="Your name" />
            <input placeholder="Email address" type="email" />
            <input placeholder="Organisation" />
            <textarea placeholder="Tell us about your event" />
            <button className="button gold">Send enquiry →</button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
