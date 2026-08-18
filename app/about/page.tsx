import Image from 'next/image';
import { Reveal } from '@/components/motion/Reveal';
import { RevealGroup } from '@/components/motion/RevealGroup';
import { MilestoneCard } from '@/components/MilestoneCard';
import { ZCard } from '@/components/ZCard';

const milestones = [
  ['2006', 'Minds and Lines Architecture', 'Established Minds and Lines Limited, an A-Grade Architecture firm dedicated to crafting spaces and transforming lives through personalised, high-quality design solutions.'],
  ['2006', 'Minds Craft Furniture', 'Launched Minds Craft as a subsidiary of Minds and Lines, bringing architectural precision to exquisite furniture design and interior craftsmanship.'],
  ['2012', 'Purple Network Established', 'Founded Purple Urban and Rural Progressive Leadership & Empowerment Foundation to create platforms for youth development, entrepreneurship, and transformational leadership.'],
  ['2013', 'Books, Ventures & Mentorship', 'A body of work dedicated to making wisdom practical and opportunity more widely shared.'],
  ['2019', 'Letoha Grand Launch', 'Established Letoha Grand Bakery and Kitchen, where taste meets nutrition and togetherness. Bringing communities together through wholesome baking and authentic Nigerian cuisine.'],
  ['2019', 'Author & Thought Leader', 'Published ‘Problem Power’ - a profound exploration of how challenges serve as the raw material for discovering purpose and unlocking potential.'],
  ['2023', 'Batoha Group', 'Launched Batoha Grand Hotel and Resort in Makurdi and Batoha Stay Apartments in Abuja, where excellence meets grandeur in luxury hospitality.'],
];

export default function About() {
  return (
    <main>
      <section className="inner-hero about-hero">
        <div className="about-hero-image">
          <Image
            src="/images/about/about-hero.jpg"
            alt="Apeh Harrison Iwodi, portrait in traditional attire"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <Reveal className="about-hero-content">
          <p className="eyebrow">[ABOUT APEH HARRISON IWODI]</p>
          <h1>
            A lifetime
            <br />
            of <em>building.</em>
          </h1>
          <p className="lead">
            The work has always been about helping people see the architecture of their own possibility.
          </p>
        </Reveal>
      </section>
      <section className="band paper">
        <div className="wrap">
          <Reveal>
            <p className="eyebrow dark-label">[THE FULL STORY]</p>
            <h2 className="section-title">Some lives are built to become blueprints.</h2>
          </Reveal>
          <div className="z-story">
            <ZCard image="/images/about/about-1.jpg" alt="Apeh Harrison Iwodi, seated portrait in white traditional attire">
              <p>
                Arc. Apeh Harrison is a transgenerational leader, visionary architect, humanitarian, author, and educator devoted to empowering young minds and building impactful legacies across generations.
              </p>
              <p>
                A man driven by purpose and guided by compassion, he embodies a rare and powerful blend of creativity, leadership, and service that transforms both people and places.
              </p>
              <p>
                An astute businessman and entrepreneur, Arc. Harrison is fast becoming a household name in Nigeria as a passionate philanthropist committed to societal transformation. He is a well-travelled resource person and a highly magnetic trainer renowned for his impactful teachings in enterprise development, capacity building, leadership advancement, and public and motivational speaking.
              </p>
            </ZCard>
            <ZCard image="/images/about/about-3.jpg" alt="Apeh Harrison Iwodi speaking at a leadership summit" reverse>
              <p>
                An alumnus of the University of Jos, Nigeria, where he studied Architecture, Arc. Harrison has never viewed architecture merely as the art of designing buildings, but as the art of designing destinies. To him, every structure, project, and initiative represents an opportunity to build people, purpose, and posterity.
              </p>
              <p>
                With over three decades of active leadership and influence, Arc. Harrison has inspired, mentored, and directly empowered more than 30,000 individuals across Nigeria and beyond, raising visionary leaders and change-makers across diverse sectors.
              </p>
            </ZCard>
            <ZCard image="/images/about/about-5.jpg" alt="Apeh Harrison Iwodi, seated portrait in a grey suit">
              <p>He is widely known for building and leading impactful brands across hospitality, design, and humanitarian service, including:</p>
              <ul>
                <li>
                  <strong>Batoha</strong>
                  A premium hotel and short-stay apartment brand offering comfort, luxury, and exceptional hospitality experiences.
                </li>
                <li>
                  <strong>Letoha</strong>
                  A thriving restaurant and bakery known for quality dining and culinary excellence.
                </li>
                <li>
                  <strong>Minds and Lines</strong>
                  An architectural and interior design firm dedicated to innovative, functional, and aesthetically transformative spaces.
                </li>
                <li>
                  <strong>Purple Foundation</strong>
                  A charity organisation committed to humanitarian outreach, youth empowerment, and community development initiatives.
                </li>
              </ul>
              <p>
                Arc. Harrison is also an accomplished author, having written two transformational books, Uncommon Common Sense and Problem Power, works that continue to shape mindsets, inspire innovation, and empower individuals to turn challenges into opportunities for growth and impact.
              </p>
            </ZCard>
            <ZCard image="/images/about/about-6.jpg" alt="Apeh Harrison Iwodi with his wife, Winifred Apeh Harrison" reverse>
              <p>
                He is happily married to Mrs Winifred Apeh Harrison, and their union is blessed with three children, reflecting his strong commitment to family values alongside his lifelong dedication to leadership and service.
              </p>
              <p>
                His leadership begins at home and extends to the world. His family remains both his anchor and his inspiration, shaping the compassion, humility, and integrity with which he leads.
              </p>
            </ZCard>
          </div>
        </div>
      </section>
      <section className="band dark">
        <div className="wrap">
          <p className="eyebrow">[A LIFE IN MILESTONES]</p>
          <RevealGroup className="timeline">
            {milestones.map(([year, title, text]) => (
              <MilestoneCard key={title} year={year} title={title} text={text} />
            ))}
          </RevealGroup>
        </div>
      </section>
    </main>
  );
}
