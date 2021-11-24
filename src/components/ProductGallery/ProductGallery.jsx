import React from "react";
import "./productGallery.css";

export default function ProductGallery({ product }) {
  return (
    <div className="productGallery">
      <img
        className="productGallery__img--1"
        src={product.image?.gallery1}
        alt={`${product.name} ${product.category} `}
      />
      <img
        className="productGallery__img--2"
        src={product.image?.gallery2}
        alt={`${product.name} ${product.category} `}
      />

      <img
        className="productGallery__img--3"
        src={product.image?.gallery3}
        alt={`${product.name} ${product.category} `}
      />
    </div>
  );
}
