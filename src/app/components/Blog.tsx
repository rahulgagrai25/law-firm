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

        <style jsx>{`
          .blog-section {
            font-family: "Lora", serif;
            color: rgba(30, 30, 30, 0.88);
            background-color: #fcf7f0;
            padding: 100px 20px;
            width: 100%;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 100px;
            margin-top: 100px;
          }

          .blog-container {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 100px;
            position: relative;
          }

          .blog-heading {
            font-size: 2.5rem;
            font-weight: 300;
            text-align: starting;
            margin-bottom: 3rem;
            position: relative;
          }
          .blog-watermark {
            position: absolute;
            top: -35%;
            left: 50%;
            transform: translateX(-50%);
            font-family: "Lora", serif;
            font-size: 160px;
            line-height: 0.8;
            opacity: 0.06;
            pointer-events: none;
            user-select: none;
            white-space: nowrap;
          }

          .blog-heading:after {
            content: "";
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background-color: #b38b59;
          }

          .slider-container {
            overflow: hidden;
            margin: 0 0 3rem;
          }

          .slider-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
          }

          .blog-slide {
            flex-shrink: 0;
            padding: 30px 35px;
            box-sizing: border-box;
          }

          .blog-card {
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          }

          .card-content {
            padding: 35px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }

          .card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
          }

          .post-date {
            font-size: 0.875rem;
            color: #888;
          }

          .post-title {
            font-size: 1.375rem;
            font-weight: 500;
            font-family: "Lora", serif;
            line-height: 1.4;
            margin: 0 0 1rem;
            flex-grow: 1;
          }

          .post-author {
            font-size: 0.875rem;
            color: #888;
            margin: 0;
            font-family: "Jost", sans-serif;
          }

          .slider-controls {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .slider-nav {
            display: flex;
            gap: 0.5rem;
          }

          .slider-btn {
            background: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: background 0.3s ease, transform 0.3s ease;
          }

          .slider-btn:hover {
            background: #f5f5f5;
            transform: scale(1.05);
          }

          .btn-icon {
            width: 24px;
            height: 24px;
            color: #555;
          }

          /* Watermark */
          .blog-container:before {
            content: "Blog";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 120px;
            font-weight: 800;
            color: rgba(30, 30, 30, 0.03);
            pointer-events: none;
            z-index: 0;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .blog-heading {
              font-size: 2.25rem;
            }

            .post-title {
              font-size: 1.25rem;
            }

            .blog-container:before {
              font-size: 90px;
            }
          }

          @media (max-width: 768px) {
            .blog-heading {
              font-size: 2rem;
            }

            .blog-container:before {
              font-size: 70px;
            }

            .slider-controls {
              flex-direction: column;
              gap: 1rem;
            }
          }

          @media (max-width: 640px) {
            .blog-section {
              padding: 40px 15px;
            }

            .blog-heading {
              font-size: 1.75rem;
            }

            .card-content {
              padding: 10px;
            }

            .post-title {
              font-size: 1.125rem;
            }

            .blog-container:before {
              font-size: 50px;
            }

            .slider-btn {
              width: 35px;
              height: 35px;
            }

            .btn-icon {
              width: 20px;
              height: 20px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
