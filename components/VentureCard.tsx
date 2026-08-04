import Link from 'next/link';
export function VentureCard({slug,category,title,text}:{slug:string;category:string;title:string;text:string}){return <article className="venture"><p>{category}</p><h3>{title}</h3><span className="rule"/><div><p>{text}</p><Link href={`/legacy/${slug}`}>View Project ↗</Link></div></article>}
