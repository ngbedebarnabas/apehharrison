import { Reveal } from '@/components/motion/Reveal';

const topics = ['Leadership that lasts', 'Building teams with purpose', 'Problem power', 'The architecture of influence'];

export default function Speaking() {
  return (
    <main>
      <section className="inner-hero">
        <Reveal>
          <p className="eyebrow">[SPEAKING & COURSES]</p>
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
        <div className="wrap two-col">
          <Reveal>
            <p className="eyebrow">[COURSES]</p>
            <h2>Learning for the long horizon.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead">
              Designed for emerging leaders and seasoned builders alike, these courses make the inner work of leadership practical, generous and usable.
            </p>
          </Reveal>
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
