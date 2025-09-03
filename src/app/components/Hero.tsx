import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Wilson Law Firm.</h1>
        <p>
          We are a leading law firm in financial & business industry. <br />
          With more than 20 years of experience.
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