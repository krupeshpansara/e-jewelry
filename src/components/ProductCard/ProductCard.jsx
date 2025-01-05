// src/components/ProductCarousel/ProductCard.jsx
import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </div>
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__price">{product.price}</p>
      <button className="product-card__button">Add to cart</button>
    </div>
  );
};

export default ProductCard;
