import React from "react";
import Image from "next/image";

function Commitment() {
  return (
    <div className="commitment">
      <div className="commit-info div1">
        <Image src="/commit/1.png" alt="" width={60} height={60} /> 
        <h1>WINNING AWARD LAW FIRM</h1>
        <p>Lawyers and attorneys act as both legal advisors and advocates, guiding individuals and businesses through intricate legal processes.</p>
        <a href="">LEARN MORE →</a>
        </div>
      <div className="commit-info div2"> 
        <Image src="/commit/2.png" alt="" width={60} height={60} />
        <h1>CONFIDENTIAL</h1>
        <p>Your information is held in strict confidence with us.We prioritize safeguarding your sensitive data. Rest assured, your case details remain private.</p>
        <a href="">LEARN MORE →</a>
      </div>
      <div className="commit-info div3"> 
        <Image src="/commit/3.png" alt="" width={60} height={60} />
        <h1>LEGAL PROTECTION</h1>
        <p>We provide robust legal protection for our clients. Your rights and interests are our top priority. Rest assured for safeguarding your legal rights.</p>
        <a href="">LEARN MORE →</a>      
      </div>
    </div>
  );
}

export default Commitment;