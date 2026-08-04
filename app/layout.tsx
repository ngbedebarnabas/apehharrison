import type { Metadata } from 'next';
import { DM_Sans, Fraunces, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-body' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

export const metadata: Metadata = { title: 'ARC. | Apeh Harrison Iwodi', description: 'Building people, purpose, and posterity.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${fraunces.variable} ${dmSans.variable} ${mono.variable}`}><NavBar />{children}<Footer /></body></html>;
}
