import React, { useState } from "react";
import './home.css'

const SliderComponent = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <section className="carousel-section-slide">
      <div className="carousel-wrap-slick1">
        <div className="carousel-slick1">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item-slick1 ${
                index === currentSlide ? "active" : ""
              }`}
              style={{ backgroundImage: slide.backgroundImage }}
            >
              <div className="container h-full">
                <div className="carousel-flex-col-l-m h-full p-t-100 p-b-30 respon5">
                  {slide.animations.map((animation, idx) => (
                    <div
                      key={idx}
                      className={`carousel-layer-slick1 animated ${
                        index === currentSlide ? animation : "visible-false"
                      }`}
                      data-appear={animation}
                      data-delay={idx * 800}
                    >
                      {idx === 0 && (
                        <span className="carousel-ltext-101 cl2 respon2">
                          {slide.text1}
                        </span>
                      )}
                      {idx === 1 && (
                        <h2 className="carousel-ltext-201 cl2 p-t-19 p-b-43 respon1">
                          {slide.text2}
                        </h2>
                      )}
                      {idx === 2 && (
                        <a
                          href={slide.link}
                          className="carousel-flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                        >
                          Shop Now
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handlePrevSlide}>Previous</button>
      <button onClick={handleNextSlide}>Next</button>
    </section>
  );
};

export default SliderComponent;
