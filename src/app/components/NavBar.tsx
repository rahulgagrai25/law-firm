"use client"
import React, { useState } from "react";
import Image from "next/image";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <Image src="/social_icons/law-logo.png" alt="" width={80} height={80} />
      
      {/* Hamburger menu for mobile */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={isMenuOpen ? "nav-open" : ""}>
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

      <button className="consultation-btn">FREE CONSULTATION</button>
    </div>
  );
}

export default NavBar;