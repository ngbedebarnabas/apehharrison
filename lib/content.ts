export const ventures = [
  { slug: 'minds-and-lines', category: 'ARCHITECTURE', title: 'Minds and Lines', text: 'A strategic practice of architecture turning complex ideas into clear, enduring architectural systems and implementations.', image: '/images/ventures/minds-and-lines.jpg' },
  { slug: 'purple-network', category: 'COMMUNITY', title: 'Purple Network', text: 'A living network for people committed to greatness, influence, cultural mindset shifts, excellence and shared growth.', image: '/images/ventures/purple-network.jpg', imagePosition: 'center 12%' },
  { slug: 'minds-craft', category: 'INTERIOR DESIGNS', title: 'Minds Craft', text: 'Design and decoration expertise, caring to the tinest detail and leaving no stone unturned.', image: '/images/ventures/minds-craft-gallery/gallery-01.jpg' },
  { slug: 'batoha-group', category: 'HOSPITALITY', title: 'Batoha Group', text: 'An exquisite, serene and luxurious  hospitality brand, giving guests an experience that makes room for rest and renewal.', image: '/images/ventures/batoha-group.jpg' }
];
export const books = [
  { title: 'UNCOMMON COMMON SENSE: Practical Wisdom for Personal and Financial Growth', format: 'HARDCOPY EDITION', price: '₦7,250', text: 'Practical Wisdom for Personal and Financial Growth. Learn timeless approaches to making decisions beyond emotions while building resilience in tough circumstances.', image: '/images/uncommon-common-sense.jpg', link: 'https://selar.com/uncommonsensehardcopy' },
  { title: 'PROBLEM POWER: Discover Purpose, Unlock Greatness', format: 'PAPERBACK', price: '₦2,750', text: 'What we hope to accomplish in this book is to unwrap the prospects in problems. There is a way to navigate through problems, work problems and convert problems to a pool of advantages.', image: '/images/problem-power.jpg', link: 'https://selar.com/problempower' },
  { title: 'UNCOMMON COMMON SENSE: Practical Wisdom for Personal and Financial Growth', format: 'DIGITAL EDITION', price: '₦3,750', text: 'Practical Wisdom for Personal and Financial Growth. Learn timeless approaches to making decisions beyond emotions while building resilience in tough circumstances.', image: '/images/uncommon-common-sense.jpg', link: 'https://selar.com/uncommoncommonsense' }
];
export const quotes = [
  { quote: 'The greatest tragedy in life is not death, but a life without a purpose.', author: 'Dr. Myles Munroe', role: 'AUTHOR & LEADER' },
  { quote: 'What counts in life is not the mere fact that we have lived. It is what difference we have made.', author: 'Nelson Mandela', role: 'STATESMAN' },
  { quote: 'Not all of us can do great things. But we can do small things with great love.', author: 'Mother Teresa', role: 'HUMANITARIAN' },
  { quote: 'As long as you’re going to be thinking anyway, think big.', author: 'Donald Trump', role: '45TH PRESIDENT OF THE UNITED STATES' },
  { quote: 'Change will not come if we wait for some other person or some other time. We are the ones we’ve been waiting for. We are the change that we seek.', author: 'Barack Obama', role: '44TH PRESIDENT OF THE UNITED STATES' }
];
export const galleryImages = [
  { src: '/images/gallery/gallery-01.jpg', alt: 'Apeh Harrison Iwodi, seated portrait in a grey suit' },
  { src: '/images/gallery/gallery-02.jpg', alt: 'Apeh Harrison Iwodi, smiling portrait in traditional attire' },
  { src: '/images/gallery/gallery-03.jpg', alt: 'Apeh Harrison Iwodi, portrait in traditional attire' },
  { src: '/images/gallery/gallery-04.jpg', alt: 'Apeh Harrison Iwodi, portrait in a checked suit' },
  { src: '/images/gallery/gallery-05.jpg', alt: 'Apeh Harrison Iwodi, seated portrait in a traditional cap' },
  { src: '/images/gallery/gallery-06.jpg', alt: 'Apeh Harrison Iwodi, seated portrait in a traditional cap, angled view' },
  { src: '/images/gallery/gallery-07.jpg', alt: 'Apeh Harrison Iwodi, full-length portrait in white traditional attire' },
  { src: '/images/gallery/gallery-08.jpg', alt: 'Apeh Harrison Iwodi, full-length seated portrait in a grey suit' }
];
export type GalleryImage = { src: string; alt: string; width: number; height: number };
const galleryPath = (folder: string, n: number) => `/images/ventures/${folder}/gallery-${String(n).padStart(2, '0')}.jpg`;
const mc = (n: number) => galleryPath('minds-craft-gallery', n);
const pn = (n: number) => galleryPath('purple-network-gallery', n);
export type GallerySection = { title?: string; images: GalleryImage[] };
const batohaPath = (set: 'resort' | 'royale' | 'stay', n: number) =>
  `/images/ventures/batoha-group-gallery/${set}-${String(n).padStart(2, '0')}.jpg`;
const bgResort = (n: number) => batohaPath('resort', n);
const bgRoyale = (n: number) => batohaPath('royale', n);
const bgStay = (n: number) => batohaPath('stay', n);
// Each venture's gallery is a list of sections; a section with a title gets a heading above its grid.
const ml = (n: number) => galleryPath('minds-and-lines-gallery', n);
export const ventureGalleries: Record<string, GallerySection[]> = {
  'minds-and-lines': [
    {
      images: [
        { src: ml(1), alt: 'Batoha Resort building lit up at night with warm exterior lighting', width: 1440, height: 916 },
        { src: ml(2), alt: 'Two men in high-visibility vests talking on a building site', width: 1439, height: 1440 },
        { src: ml(3), alt: 'Site team in discussion, one man holding up a plan, beside a blue pipe and a block wall', width: 1440, height: 1080 },
        { src: ml(4), alt: 'Two men in high-visibility vests on a construction site with steel reinforcement behind them', width: 1439, height: 1440 },
        { src: ml(5), alt: 'Group of men reviewing a plan on a construction site', width: 1440, height: 1080 },
        { src: ml(6), alt: 'Batoha Resort building at night with its illuminated sign and entrance', width: 1440, height: 916 },
        { src: ml(7), alt: 'Team gathered on marked-out ground, discussing a drawing', width: 1440, height: 1080 },
        { src: ml(8), alt: 'Site team reviewing a plan beside a block wall and a blue pipe', width: 1440, height: 1080 },
      ],
    },
  ],
  'batoha-group': [
    {
      title: 'Batoha Resort',
      images: [
        { src: bgResort(1), alt: 'Living room with an L-shaped grey sofa, framed prints and a square coffee table', width: 1280, height: 928 },
        { src: bgResort(2), alt: 'Double bed with a panelled headboard beside a wooden door and curtains', width: 1280, height: 851 },
        { src: bgResort(3), alt: 'Double bed with an orange armchair and gold wall lighting', width: 1280, height: 851 },
        { src: bgResort(4), alt: 'Suite with a wall-mounted TV, desk and a lit ceiling recess', width: 1280, height: 851 },
        { src: bgResort(5), alt: 'Bedroom with a wooden slatted TV wall, wardrobe and cream drawers', width: 1280, height: 851 },
        { src: bgResort(6), alt: 'Bed with an upholstered headboard and an orange armchair in the corner', width: 1280, height: 851 },
        { src: bgResort(7), alt: 'Close-up of a bed with a grey panelled headboard and white pillows', width: 1280, height: 851 },
        { src: bgResort(8), alt: 'Bedroom with a cream armchair, framed art and a wooden headboard wall', width: 1280, height: 851 },
      ],
    },
    {
      title: 'Batoha Royale',
      images: [
        { src: bgRoyale(1), alt: 'Lounge with a cream sectional sofa, gold coffee table and framed art', width: 1600, height: 1066 },
        { src: bgRoyale(2), alt: 'Dining lounge with a blue-lit ceiling, tables, chairs and a BATOHA neon sign', width: 1600, height: 1218 },
        { src: bgRoyale(3), alt: 'Suite with a bed behind a sofa, framed prints and gold ceiling lighting', width: 1600, height: 1066 },
        { src: bgRoyale(4), alt: 'Wall-mounted TV on a ribbed wood panel with a desk and chair', width: 1600, height: 1103 },
        { src: bgRoyale(5), alt: 'View through a window into the dining area, with a BATOHA sign and gold lighting', width: 1600, height: 1200 },
        { src: bgRoyale(6), alt: 'Suite with a bed, three framed prints and warm cove lighting', width: 1600, height: 1066 },
        { src: bgRoyale(7), alt: 'Lounge with a beige sofa, wall art and a TV on a panelled wall', width: 1600, height: 1200 },
        { src: bgRoyale(8), alt: 'Corridor with a brick wall, an orange armchair and recessed ceiling lights', width: 1238, height: 711 },
        { src: bgRoyale(9), alt: 'Hallway with a wardrobe and a cream armchair', width: 1200, height: 1600 },
        { src: bgRoyale(10), alt: 'Corridor with wood-panelled walls and lit ceiling strips', width: 1238, height: 711 },
        { src: bgRoyale(11), alt: 'Waiting area with cushioned wooden chairs and trailing plants', width: 1600, height: 1200 },
        { src: bgRoyale(12), alt: 'Waiting area with chairs along the wall and a planter at the end', width: 1200, height: 1600 },
      ],
    },
    {
      title: 'Batoha Stay Apartment',
      images: [
        { src: bgStay(1), alt: 'Apartment building exterior at night with warm lighting and potted plants', width: 1080, height: 1350 },
        { src: bgStay(2), alt: 'Living room with an orange armchair, L-shaped sofa and a TV wall', width: 1080, height: 1350 },
        { src: bgStay(3), alt: 'Apartment building exterior in daylight with a balcony and plants', width: 1600, height: 1200 },
        { src: bgStay(4), alt: 'Open-plan living and dining area with an orange armchair', width: 1080, height: 1350 },
        { src: bgStay(5), alt: 'Kitchen with a black countertop and a dining table with orange chairs', width: 1080, height: 1350 },
        { src: bgStay(6), alt: 'Living area with a lit ceiling recess, TV wall and dining chair', width: 1080, height: 1350 },
        { src: bgStay(7), alt: 'Living room with a grey sectional sofa and a slatted window blind', width: 1080, height: 1350 },
        { src: bgStay(8), alt: 'Kitchen with a built-in washing machine and a black countertop', width: 1080, height: 1350 },
        { src: bgStay(9), alt: 'Close-up of a grey sofa with patterned cushions beside a coffee table', width: 1600, height: 1200 },
      ],
    },
  ],
  'purple-network': [
    {
      images: [
        { src: pn(1), alt: 'Speaker on stage beside a podium at The Next Great Thing Summit', width: 1280, height: 1600 },
        { src: pn(2), alt: 'Seven participants posing together in front of The Next Great Thing backdrop', width: 1600, height: 1067 },
        { src: pn(3), alt: 'Speaker with a microphone at a wooden podium', width: 1170, height: 1428 },
        { src: pn(4), alt: 'Panel of speakers seated on stage during a discussion', width: 1600, height: 1067 },
        { src: pn(5), alt: 'Speaker in an African-print outfit at a podium', width: 1200, height: 1600 },
        { src: pn(6), alt: 'Two people shaking hands behind a one million naira prize cheque', width: 1600, height: 1065 },
        { src: pn(7), alt: 'Black-and-white photo of attendees with their hands raised in prayer', width: 1600, height: 1200 },
        { src: pn(8), alt: 'Six people posing together in front of The Next Great Thing backdrop', width: 1600, height: 1065 },
        { src: pn(9), alt: 'Speaker in an African-print outfit gesturing while speaking into a microphone', width: 1200, height: 1600 },
        { src: pn(10), alt: 'Smiling audience members seated at the summit', width: 1600, height: 1067 },
        { src: pn(11), alt: 'Black-and-white photo of attendees looking upward', width: 1600, height: 1200 },
        { src: pn(12), alt: 'Speaker with a microphone beside a wooden podium', width: 1280, height: 1600 },
        { src: pn(13), alt: 'Winner seated holding a one million naira prize cheque', width: 810, height: 1080 },
      ],
    },
  ],
  'minds-craft': [
    {
      images: [
        { src: mc(1), alt: 'Living room with a sectional sofa and a wood-panelled TV wall', width: 1600, height: 1265 },
        { src: mc(2), alt: 'Open-plan living area with tufted sofas under a coffered ceiling', width: 1080, height: 1350 },
        { src: mc(3), alt: 'Bedroom with a ribbed wooden headboard wall and gold LED ceiling trim', width: 1600, height: 1265 },
        { src: mc(4), alt: 'Living area with an orange velvet armchair and a recessed ceiling', width: 1080, height: 1350 },
        { src: mc(5), alt: 'Lounge with a beige sectional, geometric rug and winged-bird artwork', width: 1600, height: 1265 },
        { src: mc(6), alt: 'Kitchen and dining area with orange upholstered chairs', width: 1080, height: 1350 },
        { src: mc(7), alt: 'Bedroom with a cream armchair, framed art and a lit ceiling', width: 1600, height: 1226 },
        { src: mc(8), alt: 'Living room with an orange armchair, marble coffee table and curtains', width: 1080, height: 1350 },
        { src: mc(9), alt: 'Bed with a slatted wooden headboard and three framed prints', width: 1600, height: 1066 },
        { src: mc(10), alt: 'Living room with a grey sectional, patterned cushions and a slatted blind', width: 1080, height: 1350 },
        { src: mc(11), alt: 'Wide living room with a tufted sofa and an open kitchen beyond', width: 1600, height: 1200 },
        { src: mc(12), alt: 'Kitchen with a built-in washing machine and a black countertop', width: 1080, height: 1350 },
        { src: mc(13), alt: 'Living room with a lit ceiling recess, TV wall and dining chair', width: 1080, height: 1350 },
        { src: mc(14), alt: 'Ribbed wood TV wall with a grey upholstered chair', width: 1080, height: 1350 },
        { src: mc(15), alt: 'Close-up of a sectional sofa beside a TV wall and a tall indoor plant', width: 1080, height: 1350 },
      ],
    },
  ],
};
export const ventureHeroes: Record<string, { src: string; alt: string; position?: string }> = {
  'minds-and-lines': {
    src: '/images/ventures/minds-and-lines-gallery/hero.jpg',
    alt: 'Batoha Resort building in the evening light, with a paved forecourt',
    position: 'center 40%',
  },
  'batoha-group': {
    src: '/images/ventures/batoha-group-gallery/hero.jpg',
    alt: 'Suite with a bed, three framed prints and warm cove lighting',
    position: 'center 40%',
  },
  'purple-network': {
    src: '/images/ventures/purple-network-gallery/hero.jpg',
    alt: 'Two winners holding a five hundred thousand naira prize cheque at The Next Great Thing Summit',
    position: 'center 30%',
  },
  'minds-craft': {
    src: '/images/ventures/minds-craft-gallery/hero.jpg',
    alt: 'Living room with a sectional sofa and a wood-panelled TV wall',
  },
};
export const ventureIntros: Record<string, { title: string; text: string }> = {
  'minds-and-lines': {
    title: 'Minds and Lines',
    text: 'An architectural and interior design firm dedicated to innovative, functional, and aesthetically transformative spaces.',
  },
  'batoha-group': {
    title: 'Batoha Group',
    text: 'A premium hotel and short-stay apartment brand offering comfort, luxury, and exceptional hospitality experiences.',
  },
  'purple-network': {
    title: 'Purple Network',
    text: 'A charity organisation committed to humanitarian outreach, youth empowerment, and community development initiatives.',
  },
  'minds-craft': {
    title: 'Minds Group',
    text: 'An architectural and interior design firm dedicated to innovative, functional, and aesthetically transformative spaces.',
  },
};
// Heading above a venture's gallery; ventures without an entry use "A look inside."
export const ventureGalleryTitles: Record<string, string> = {
  'minds-and-lines': 'From site to structure.',
};
// Per-venture override for the button on /ventures/[slug]; ventures without an entry use "Work with us" → /contact.
export const ventureCtas: Record<string, { label: string; href: string }> = {
  'batoha-group': { label: 'Visit Group Website', href: 'https://batohagroup.com/' },
  // TODO: replace href with the community link once it's provided.
  'purple-network': { label: 'Join Our Community', href: '/contact' },
};
export const booksHero = {
  src: '/images/ventures/books-gallery/hero.jpg',
  alt: 'Two men smiling and holding a copy of Uncommon Common Sense',
  position: 'center 20%',
};
export const booksGallery: GalleryImage[] = [
  { src: '/images/ventures/books-gallery/gallery-01.jpg', alt: 'A man and a young woman smiling together, holding a copy of Uncommon Common Sense', width: 1200, height: 1600 },
  { src: '/images/ventures/books-gallery/gallery-02.jpg', alt: 'Two people reading a copy of Uncommon Common Sense together', width: 1200, height: 1600 },
  { src: '/images/ventures/books-gallery/gallery-03.jpg', alt: 'Two men in traditional attire posing with a copy of Uncommon Common Sense', width: 1200, height: 1600 },
  { src: '/images/ventures/books-gallery/gallery-04.jpg', alt: 'A woman and a man posing outdoors with a copy of Uncommon Common Sense', width: 1200, height: 1600 },
];
export const venturesHero = {
  src: '/images/ventures/batoha-group-gallery/royale-06.jpg',
  alt: 'Batoha Royale suite with a made bed, three framed prints and warm cove lighting',
  position: 'center 40%',
};
export const keynoteHero = {
  src: '/images/keynote-gallery/hero.jpg',
  alt: 'Panel of speakers seated on stage in front of an audience',
  position: 'center 45%',
};
const kn = (n: number) => `/images/keynote-gallery/gallery-${String(n).padStart(2, '0')}.jpg`;
export const keynoteGallery: GalleryImage[] = [
  { src: kn(1), alt: 'Speakers seated in white armchairs on a stage in front of a large audience', width: 1200, height: 800 },
  { src: kn(2), alt: 'Speaker with a microphone at a wooden podium on stage', width: 1280, height: 1600 },
  { src: kn(3), alt: 'Two men shaking hands warmly on stage beside white armchairs', width: 1090, height: 1600 },
  { src: kn(4), alt: 'Panel of speakers seated on stage during a discussion', width: 1600, height: 1067 },
  { src: kn(5), alt: 'Speaker with a microphone seated in a white armchair, gesturing as he talks', width: 1201, height: 1500 },
  { src: kn(6), alt: 'Speaker leaning towards the audience beside a podium at The Next Great Thing Summit', width: 1280, height: 1600 },
  { src: kn(7), alt: 'Panel discussion on a stage beneath a large screen, with a speaker making a point', width: 1200, height: 800 },
  { src: kn(8), alt: 'Speaker on stage beside a podium under a chandelier of hanging crystals', width: 1280, height: 1600 },
];
export const articles = [
  { slug: 'the-next-great-thing', category: 'THOUGHTS', date: '12.06.2024', title: 'The next great thing may be closer than you think.', text: 'A reflection on the quiet discipline of noticing what is already in your hands.' },
  { slug: 'the-work-of-mentorship', category: 'LEADERSHIP', date: '27.04.2024', title: 'Mentorship is the work of enlarging another person’s horizon.', text: 'Why the most meaningful legacy is carried in people, not plaques.' },
  { slug: 'designing-for-posterity', category: 'LEGACY', date: '05.02.2024', title: 'Designing for posterity asks better questions.', text: 'Architectural thinking offers a vocabulary for building lives that endure.' }
];
