const items = [
  [
    "01.",
    "Philosophy of Legacy",
    "Legacy is not a monument to the self. It is the intentional transfer of capacity, character and courage.",
  ],
  [
    "02.",
    "The Architect’s Method",
    "Begin with purpose. Understand the terrain. Then build with patience for what the future will require.",
  ],
  [
    "03.",
    "What Drives Him",
    "The belief that every individual carries a potential of greatness and an answer the world has been waiting to hear.",
  ],
  [
    "04.",
    "The Mentorship Experience",
    "More than advice: a disciplined, generous space to discover a truer scale of your own potential.",
  ],
];
export function ManifestoGrid() {
  return (
    <div className="manifesto">
      {items.map(([num, title, text]) => (
        <article key={num}>
          <span>{num}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
