// src/components/CategoryHighlights/ImageSlider.jsx
import React, { useState, useEffect } from "react";
import "./ImageSlider.scss";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          key={image.alt}
          src={image.src}
          alt={image.alt}
          className={`image-slider__image ${
            index === currentIndex ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
