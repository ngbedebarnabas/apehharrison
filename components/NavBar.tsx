'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
const links = [['About','/about'],['Legacy','/legacy'],['Books','/books'],['Speaking','/speaking'],['Insights','/insights']];
export function NavBar() { const [open,setOpen]=useState(false); return <header className="nav"><Link className="brand" href="/"><Image className="crest" src="/images/apeh-crest.jpg" alt="Apeh Harrison crest" width={46} height={46} priority /><span>ARC.<small>APEH HARRISON</small></span></Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open ? '×' : '☰'}</button><nav className={open ? 'open' : ''}>{links.map(([name,path])=><Link onClick={()=>setOpen(false)} key={name} href={path}>{name}</Link>)}</nav><Link className="button gold nav-cta" href="/contact">Connect <span>↗</span></Link></header> }
