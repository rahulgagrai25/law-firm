import React from "react";

function NavBar() {
  return (
    <div className="navbar">
      <img src="social_icons/law-logo.png" alt="" />

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
