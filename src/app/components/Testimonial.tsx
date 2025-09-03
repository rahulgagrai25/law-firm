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

    
    </section>
  );
};

export default Testimonial;
