import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text h-[100vh] w-[50%]  p-10px">
        <h1>Wilson Law Firm.</h1>
        <p>
          We are a leading law firm in financial & business industry. <br />
          With more than 20 years of experience.
        </p>
        <button>CONTACT NOW →</button>

        <div className="image">
          
        </div>
      </div>
      <div className="h-[100vh] w-[50%] flex justify-center">
        <Image className="h-[100vh] opacity-45" src="/hero/law-lady.png" alt="" width={700} height={800} />
      </div>
    </div>
  );
}

export default Hero;