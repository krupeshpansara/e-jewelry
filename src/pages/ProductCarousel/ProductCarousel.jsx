// src/components/ProductCarousel/ProductCarousel.jsx
import React, { useState } from "react";
import classNames from "classnames";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProductCarousel.scss";
import ProductSlider from "@/components/ProductSlider";

const productsList = {
  bestsellers: [
    {
      id: 1,
      name: "Lotus Earrings",
      price: "$129",
      image: "https://via.placeholder.com/200x300?text=bestsellers+1",
    },
    {
      id: 2,
      name: "Amare Choker",
      price: "$199",
      image: "https://via.placeholder.com/200x300?text=bestsellers+2",
    },
    {
      id: 3,
      name: "De La Mer Seahorse Earrings",
      price: "$149",
      image: "https://via.placeholder.com/200x300?text=bestsellers+3",
    },
    {
      id: 4,
      name: "Conseal Necklace",
      price: "$179",
      image: "https://via.placeholder.com/200x300?text=bestsellers+4",
    },
    {
      id: 5,
      name: "Pearl Drop Earrings",
      price: "$159",
      image: "https://via.placeholder.com/200x300?text=bestsellers+5",
    },
    {
      id: 6,
      name: "Lotus Earrings",
      price: "$129",
      image: "https://via.placeholder.com/200x300?text=bestsellers+6",
    },
    {
      id: 7,
      name: "Amare Choker",
      price: "$199",
      image: "https://via.placeholder.com/200x300?text=bestsellers+7",
    },
    {
      id: 8,
      name: "De La Mer Seahorse Earrings",
      price: "$149",
      image: "https://via.placeholder.com/200x300?text=bestsellers+8",
    },
    {
      id: 9,
      name: "Conseal Necklace",
      price: "$179",
      image: "https://via.placeholder.com/200x300?text=bestsellers+9",
    },
    {
      id: 10,
      name: "Pearl Drop Earrings",
      price: "$159",
      image: "https://via.placeholder.com/200x300?text=bestsellers+10",
    },
  ],
  newArrivals: [
    {
      id: 1,
      name: "Lotus Earrings",
      price: "$129",
      image: "https://via.placeholder.com/200x300?text=New+Arrivals+1",
    },
    {
      id: 2,
      name: "Amare Choker",
      price: "$199",
      image: "https://via.placeholder.com/200x300?text=New+Arrivals+2",
    },
    {
      id: 3,
      name: "De La Mer Seahorse Earrings",
      price: "$149",
      image: "https://via.placeholder.com/200x300?text=New+Arrivals+3",
    },
    {
      id: 4,
      name: "Conseal Necklace",
      price: "$179",
      image: "https://via.placeholder.com/200x300?text=New+Arrivals+4",
    },
    {
      id: 5,
      name: "Pearl Drop Earrings",
      price: "$159",
      image: "https://via.placeholder.com/200x300?text=New+Arrivals+5",
    },
    {
      id: 6,
      name: "Lotus Earrings",
      price: "$129",
      image: "https://via.placeholder.com/200x300?text=New+Arrivals+6",
    },
    {
      id: 7,
      name: "Amare Choker",
      price: "$199",
      image: "https://via.placeholder.com/200x300?text=New+Arrivals+7",
    },
    {
      id: 8,
      name: "De La Mer Seahorse Earrings",
      price: "$149",
      image: "https://via.placeholder.com/200x300?text=New+Arrivals+8",
    },
    {
      id: 9,
      name: "Conseal Necklace",
      price: "$179",
      image: "https://via.placeholder.com/200x300?text=New+Arrivals+9",
    },
    {
      id: 10,
      name: "Pearl Drop Earrings",
      price: "$159",
      image: "https://via.placeholder.com/200x300?text=New+Arrivals+10",
    },
  ],
};

const ProductCarousel = () => {
  const [activeTab, setActiveTab] = useState("bestsellers");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [products, setProducts] = useState(productsList);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentSlide(0);
  };

  return (
    <section className="product-carousel">
      <div className="product-carousel__container">
        <div className="product-carousel__header">
          <h2 className="product-carousel__title">Don't Miss Out</h2>
          <div className="product-carousel__tabs" style={{ border: "none" }}>
            <button
              onClick={() => handleTabChange("bestsellers")}
              className={`product_carousel__tab_btn ${
                activeTab === "bestsellers" && "is-active"
              }`}
            >
              Bestsellers
            </button>
            <button
              onClick={() => handleTabChange("newArrivals")}
              className={`product_carousel__tab_btn ${
                activeTab === "newArrivals" && "is-active"
              }`}
            >
              New Arrivals
            </button>
          </div>
        </div>

        <ProductSlider
          products={products[activeTab]}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      </div>
    </section>
  );
};

export default ProductCarousel;
