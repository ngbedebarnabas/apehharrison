export function BookCard({
  title,
  format,
  price,
  text,
  cover,
}: {
  title: string;
  format: string;
  price: string;
  text: string;
  cover: string;
}) {
  return (
    <article className="book">
      <div className={"cover " + (cover === "PP" ? "cover-red" : "")}>
        <span>{cover === "PP" ? "PROBLEM" : "UNCOMMON"}</span>
        <strong>{cover === "PP" ? "POWER" : "COMMON SENSE"}</strong>
        <small>APEH HARRISON IWODI</small>
      </div>
      <p className="book-format">{format}</p>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="book-buy">
        <strong>{price}</strong>
        <a href="https://selar.com" target="_blank">
          Buy Now ↗
        </a>
      </div>
    </article>
  );
}
