import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>MTS Legal Firm.</h1>
        <p>
          With over 11 years of trusted legal excellence,<br />
          MTS Legal delivers client-focused solutions in business and finance. Rooted in Kochi. <br />
          We combine decades of expertise with strategic representation across Kerala and beyond.
        </p>
        <button>CONTACT NOW →</button>
      </div>
      <div className="hero-image">
        <Image src="/hero/law-lady.png" alt="Law professional" width={700} height={800} />
      </div>
    </div>
  );
}

export default Hero;