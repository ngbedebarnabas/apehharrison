import { permanentRedirect } from 'next/navigation';

// The page now lives at /keynotes; keep old /speaking links working.
export default function Speaking() {
  permanentRedirect('/keynotes');
}
