import React from "react";
import Image from "next/image";

function NavBar() {
  return (
    <div className="navbar">
      <Image src="/social_icons/law-logo.png" alt="" width={80} height={80} />

      <ul>
        <a href="#home">
          <li>HOME</li>
        </a>
        <a href="#practice-area">
          <li>PRACTICE AREA</li>
        </a>
        <a href="#case-study">
          <li>CASE STUDY</li>
        </a>
      </ul>

      <button>FREE CONSULTATION</button>
    </div>
  );
}

export default NavBar;