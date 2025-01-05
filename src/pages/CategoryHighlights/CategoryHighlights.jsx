// src/components/CategoryHighlights/CategoryHighlights.jsx
import React, { useState, useEffect } from "react";
import "./CategoryHighlights.scss";
import ImageSlider from "@/components/ImageSlider";

const categories = [
  {
    name: "Earrings",
    images: [
      { src: "/api/placeholder/400/600", alt: "Earrings 1" },
      { src: "/api/placeholder/400/600", alt: "Earrings 2" },
      { src: "/api/placeholder/400/600", alt: "Earrings 3" },
    ],
    description: "Elegant designs for every occasion",
  },
  {
    name: "Necklaces",
    images: [
      { src: "/api/placeholder/400/600", alt: "Necklaces 1" },
      { src: "/api/placeholder/400/600", alt: "Necklaces 2" },
      { src: "/api/placeholder/400/600", alt: "Necklaces 3" },
    ],
    description: "Timeless pieces that make a statement",
  },
  {
    name: "Rings",
    images: [
      { src: "/api/placeholder/400/600", alt: "Rings 1" },
      { src: "/api/placeholder/400/600", alt: "Rings 2" },
      { src: "/api/placeholder/400/600", alt: "Rings 3" },
    ],
    description: "Symbols of eternal beauty",
  },
  {
    name: "Bracelets",
    images: [
      { src: "/api/placeholder/400/600", alt: "Bracelets 1" },
      { src: "/api/placeholder/400/600", alt: "Bracelets 2" },
      { src: "/api/placeholder/400/600", alt: "Bracelets 3" },
    ],
    description: "Delicate chains and charms",
  },
];

const CategoryHighlights = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...prev, entry.target.dataset.category]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".category-item").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="category-highlights">
      <div className="category-highlights__container">
        <div
          className={`category-highlights__header ${
            visibleItems.length > 0 ? "visible" : ""
          }`}
        >
          <h2 className="category-highlights__title">Shop by Category</h2>
          <p className="category-highlights__subtitle">
            Discover our curated collections
          </p>
        </div>

        <div className="category-highlights__grid">
          {categories.map((category, index) => (
            <div
              key={category.name}
              data-category={category.name}
              className={`category-item ${
                visibleItems.includes(category.name) ? "visible" : ""
              }`}
              style={{ "--animation-delay": `${index * 0.1}s` }}
            >
              <div className="category-item__container">
                <ImageSlider images={category.images} />
                <div className="category-item__overlay" />
                <div className="category-item__content">
                  <h3 className="category-item__title">{category.name}</h3>
                  <p className="category-item__description">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;
