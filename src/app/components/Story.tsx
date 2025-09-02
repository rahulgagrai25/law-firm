import Image from "next/image";

function Story({
  title = "Story About the Firm.",
  paragraphs = [
    "We understand that navigating the intricate landscape of legal challenges can be daunting. Our seasoned team of dedicated legal professionals is here to guide you through your legal journey with expertise and empathy.",
    "Founded on principles of integrity, diligence, and client-centricity, Attorna prides itself on delivering tailored legal solutions that prioritize your unique circumstances.",
  ],
}) {
  return (
    <section className="story-about" aria-label="About Attorna">
      <div className="story-about__ghost" aria-hidden>
        ATTORNA
      </div>

      <div className="story-about__inner">
        <div className="story-about__left">
          <div className="meta">
        
          </div>

          <h2 className="story-about__title">{title}</h2>

          <div className="story-about__copy">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="story-about__actions">
            <a className="btn-story btn--primary" href="#contact">
              Contact Us
            </a>
          </div>
        </div>

        <div className="story-about__right" aria-hidden>
          <div className="img-wrap img-wrap--large">
            <Image src="/hero/story2.png" alt="" width={520} height={560} />
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Story;