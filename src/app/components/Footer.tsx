"use client";

import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Left side - Logo + About */}
        <div className="footer__brand">
          <Image
            src="/social_icons/law-logo.png"
            alt="Wilson Firm Logo"
            width={80}
            height={80}
            className="footer__logo"
          />
          <div className="footer__about">
            <h3 className="footer__title">Wilson Firm Co.</h3>
            <p className="footer__desc">
              Providing trusted legal services in Corporate, Real Estate,
              Healthcare, and more.
            </p>
          </div>
        </div>

        {/* Center - Links */}
        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Practice Areas</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Right side - Contact */}
        <div className="footer__contact">
          <h4>Contact Info</h4>
          <ul>
            <li>📍 12th Wall Street NY CV564, United States</li>
            <li>📞 (1) 2345-2345-54</li>
            <li>✉️ contact@firm.co</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Attorna Firm. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
