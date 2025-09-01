"use client"
import React, { useEffect, useState } from "react";

function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader__content">
        <img src="social_icons/law-logo.png" alt="Wilson Law Firm Logo" />
        <div className="preloader__spinner"></div>
      </div>
    </div>
  );
}

export default Preloader;