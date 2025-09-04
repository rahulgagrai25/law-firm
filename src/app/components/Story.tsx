import Image from "next/image";

function Story({
  title = "Story About the Firm.",
  paragraphs = [
    "At MTS Legal, we understand that navigating complex legal challenges can be daunting. Our experienced team is committed to guiding you with clarity, expertise, and empathy at every step of your journey.",
    "Founded in 2014 on the principles of integrity, diligence, and client-focused service, we take pride in delivering tailored solutions that address your unique business and financial needs, ensuring strategic outcomes that stand the test of time.",
  ],
}) {
  return (
    <section className="story-about" aria-label="About Attorna">
      <div className="story-about__ghost" aria-hidden>
        MTS LEGAL
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