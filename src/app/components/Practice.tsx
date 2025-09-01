import Image from "next/image";

type Card = {
  id: number;
  title: string;
  image: string;
  description?: string;
};

const cards: Card[] = [
  { id: 1, title: "CORPORATE & SECURITIES", image: "/practice/practice-1.png" },
  { id: 2, title: "REAL ESTATE LAW", image: "/practice/practice-2.png" },
  { id: 3, title: "HEALTHCARE LAW", image: "/practice/practice-3.png" },
  { id: 4, title: "TAX LAW", image: "/practice/practice-4.png" },
  { id: 5, title: "INSURANCE LAW", image: "/practice/practice-5.png" },
  { id: 6, title: "E-COMMERCE LAW", image: "/practice/practice-6.png" },
];

function Practice() {
  const firstRow = cards.slice(0, 3); // main grid (first 3)
  const secondRow = cards.slice(3); // remaining cards (same full-card style)

  return (
    <section className="practice">
      <div className="practice__ghost" aria-hidden>
        PRACTICE
      </div>

      <div className="practice__container">
        <header className="practice__header">
          <div className="practice__meta">
            <span className="practice__bar" />
            <span className="practice__small">Our Expertise</span>
          </div>

          <h2 className="practice__title">Legal Practice Areas</h2>
        </header>

        <div className="practice__grid" role="list">
          {firstRow.map((c) => (
            <article className="practice__card" key={c.id} role="listitem">
              <div className="practice__media">
                <Image src={c.image} alt={c.title} width={400} height={220} />
              </div>

              <div className="practice__body">
                <div>
                  <div className="practice__headline">{c.title}</div>
                </div>

                <a
                  className="practice__learn"
                  href="#"
                  aria-label={`Learn more about ${c.title}`}
                >
                  Learn more →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* second row uses the same full-card markup (no mini variant) */}
        <div
          className="practice__grid practice__grid--second"
          role="list"
          style={{ marginTop: 26 }}
        >
          {secondRow.map((c) => (
            <article className="practice__card" key={c.id}>
              <div className="practice__media">
                <Image src={c.image} alt={c.title} width={400} height={220} />
              </div>
              <div className="practice__body">
                <div>
                  <div className="practice__headline">{c.title}</div>
                </div>
                <a className="practice__learn" href="#">
                  Learn more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Practice;