"use client";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  content: string;
}

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "White",
      location: "LESSON",
      rating: 5,
      content:
        "The tours in this website are great. I had been really enjoying with my family! The team is very professional and taking care of the customers. Will surely recommend to my friend to join this company!",
    },
    {
      id: 2,
      name: "Christopher Thompson",
      location: "Weakinton",
      rating: 5,
      content:
        "The tours in this website are great. I had been really enjoying with my family! The team is very professional and taking care of the customers. Will surely recommend to my friend to join this company!",
    },
    {
      id: 3,
      name: "Elizabeth Brown",
      location: "Los Angeles",
      rating: 4,
      content:
        "The tours in this website are great. I had been enjoying with my family! The team is very professional and taking care of the customers. Will surely try to join this company!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="testimonials-section"
      style={{ fontFamily: '"Lora", serif' }}
    >
      <div className="testimonials-container">
        <div className="watermark">Testimonials</div>
        <h2 className="section-heading">What Our Clients Say</h2>

        <div className="testimonials-slider">
          <div
            className="slides-container"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide">
                <div className="testimonial-content">
                  <div className="rating">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>
                  <p>{testimonial.content}</p>
                  <div className="testimonial-author">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button className="control-btn prev" onClick={goToPrevSlide}>
              &#8249;
            </button>
            <div className="indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
            <button className="control-btn next" onClick={goToNextSlide}>
              &#8250;
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          padding: 4rem 2rem;
          background-color: #fcf7f0;
          position: relative;
          overflow: hidden;
          border-bottom: solid #e1d8cb 1px;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 50px auto;
          position: relative;
        }

        .watermark {
          font-family: "Lora", serif;
          position: absolute;
          top: -260px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 220px;
          opacity: 0.03;
          color: #000;
          z-index: 0;
          white-space: nowrap;
        }

        .section-heading {
          font-size: 2.5rem;
          font-family: "Lora", serif;
          text-align: starting;
          margin-bottom: 3rem;
          margin-top: 160px;
          position: relative;
          z-index: 1;
          font-weight: 300;
          color: rgba(30, 30, 30, 0.88);
        }

        .testimonials-slider {
          position: relative;
          overflow: hidden;
          margin: 0 auto;
          max-width: 800px;
        }

        .slides-container {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .testimonial-slide {
          flex: 0 0 100%;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .testimonial-content {
          background-color: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          position: relative;
        }

        .rating {
          color: #ffd700;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .testimonial-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
        }

        .testimonial-author strong {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
        }

        .testimonial-author span {
          color: #666;
          font-style: italic;
        }

        .slider-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
          gap: 1rem;
        }

        .control-btn {
          background: #333;
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }

        .control-btn:hover {
          background: #555;
        }

        .indicators {
          display: flex;
          gap: 0.5rem;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: #ccc;
          cursor: pointer;
        }

        .indicator.active {
          background: #333;
        }

        @media (max-width: 768px) {
          .section-heading {
            font-size: 2rem;
          }

          .watermark {
            font-size: 4rem;
            top: -10px;
          }

          .testimonial-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
