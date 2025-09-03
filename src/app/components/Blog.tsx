"use client";

import { useState, useEffect } from "react";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "How Is Mediation Useful in Family Law Cases?",
    date: "February 28, 2019",
    author: "John Smith",
  },
  {
    id: 2,
    title: "Doctor's Failure to Diagnose a Medical Condition",
    date: "February 28, 2019",
    author: "John Smith",
  },
  {
    id: 3,
    title: "Day Care Responsibility to Protect Children",
    date: "February 28, 2019",
    author: "John Smith",
  },
  {
    id: 4,
    title: "Understanding Your Rights in a Contract Dispute",
    date: "March 15, 2019",
    author: "Jane Doe",
  },
  {
    id: 5,
    title: "The Impact of Social Media on Legal Cases",
    date: "April 2, 2019",
    author: "Robert Johnson",
  },
  {
    id: 6,
    title: "Estate Planning Essentials for Young Families",
    date: "May 10, 2019",
    author: "Sarah Williams",
  },
];

export default function Blog() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isMounted, setIsMounted] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }

      // Ensure currentIndex doesn't exceed bounds after resize
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, blogPosts.length - slidesToShow);
        return Math.min(prev, maxIndex);
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slidesToShow]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > blogPosts.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogPosts.length - slidesToShow : prevIndex - 1
    );
  };

  // Don't render anything until mounted to avoid hydration issues
  if (!isMounted) return null;

  return (
    <>
      <section className="blog-section">
        <div className="blog-container">
          <h1 className="blog-watermark">Blog</h1>
          <h2 className="blog-heading">Our Blog</h2>

          <div className="slider-container">
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / slidesToShow)
                }%)`,
              }}
            >
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="blog-slide"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="blog-card">
                    <div className="card-content">
                      <div className="card-header">
                        <span className="post-date">{post.date}</span>
                      </div>
                      <h3 className="post-title">{post.title}</h3>
                      <p className="post-author">by {post.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <div className="slider-nav">
              <button
                onClick={prevSlide}
                className="slider-btn prev-btn"
                aria-label="Previous slides"
              >
                <svg
                  className="btn-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                className="slider-btn next-btn"
                aria-label="Next slides"
              >
                <svg
                  className="btn-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
