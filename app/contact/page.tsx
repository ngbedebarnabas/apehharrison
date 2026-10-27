import { Reveal } from '@/components/motion/Reveal';

export default function Contact() {
  return (
    <main>
      <section className="inner-hero compact">
        <Reveal>
          <p className="eyebrow">[CONTACT]</p>
          <h1>
            Begin the
            <br />
            <em>conversation.</em>
          </h1>
          <p className="lead">For speaking, partnership, mentorship or a thoughtful exchange—there is room at the table.</p>
        </Reveal>
      </section>
      <section className="band paper">
        <div className="wrap contact-grid">
          <Reveal>
            <p className="eyebrow dark-label">[GET IN TOUCH]</p>
            <h2>Write to us.</h2>
            <p>
              info@apehharrison.com
              <br />
              +234 807 946 7653
              <br />
              Abuja, Nigeria
            </p>
            <p className="mute">
              Monday — Friday
              <br />
              09:00 — 17:00 WAT
            </p>
          </Reveal>
          <Reveal delay={0.1} className="form">
            <input placeholder="Your name" />
            <input placeholder="Email address" type="email" />
            <input placeholder="Subject" />
            <textarea placeholder="Your message" />
            <button className="button gold">Send message →</button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
