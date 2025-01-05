// src/components/ProductCarousel/ProductSlider.jsx
import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ProductSlider.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard";

const images = [
  "https://via.placeholder.com/800x400?text=Image+1",
  "https://via.placeholder.com/800x400?text=Image+2",
  "https://via.placeholder.com/800x400?text=Image+3",
  "https://via.placeholder.com/800x400?text=Image+4",
  "https://via.placeholder.com/800x400?text=Image+5",
  "https://via.placeholder.com/800x400?text=Image+6",
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
};

const ProductSlider = ({ products, currentSlide, setCurrentSlide }) => {
  const [productsTree, setProductsTree] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tree = products.reduce((acc, item, index) => {
        if (index % 3 === 0) {
          acc.push([item]);
        } else {
          acc[acc.length - 1].push(item);
        }
        return acc;
      }, []);
      setProductsTree(tree);
    }
  }, [products]);

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Slider {...settings}>
        {productsTree.map((ele, index) => {
          return (
            <div key={index} style={{ width: "100%", height: "100%" }}>
              <div
                style={{ display: "flex", gap: "30px", flexDirection: "row" }}
              >
                {ele.map((obj) => {
                  const { image } = obj;

                  return (
                    <div style={{ width: "33%" }}>
                      <ProductCard product={obj} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductSlider;
