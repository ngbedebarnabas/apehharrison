import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <p className="footer-label">QUICK LINKS</p>
          <Link href="/about">About</Link>
          <Link href="/legacy">Legacy</Link>
          <Link href="/speaking">Speaking</Link>
        </div>
        <div>
          <p className="footer-label">VENTURES</p>
          <Link href="/legacy/minds-and-lines">Minds and Lines</Link>
          <Link href="/legacy/purple-network">Purple Network</Link>
          <Link href="/legacy/minds-craft">Minds Craft</Link>
        </div>
        <div>
          <p className="footer-label">BOOKS</p>
          <Link href="/books">Uncommon Common Sense</Link>
          <Link href="/books">Problem Power</Link>
          <Link href="/insights">Insights</Link>
        </div>
        <div>
          <p className="footer-label">CONNECT</p>
          <a href="mailto:hello@archarrison.com">hello@archarrison.com</a>
          <a href="tel:+2348000000000">+234 800 000 0000</a>
          <Link href="/contact">Begin a conversation →</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 Apeh Harrison Iwodi. All rights reserved.</span>
        <Link className="brand" href="/">
          <Image
            className="footer-crest"
            src="/images/apeh-crest.jpg"
            alt="Apeh Harrison crest"
            width={28}
            height={28}
          />
          ARC.
        </Link>
      </div>
    </footer>
  );
}
