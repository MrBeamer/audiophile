import React from "react";
import "./productGallery.css";

export default function ProductGallery() {
  return (
    <div className="productGallery">
      <img
        className="productGallery__img--1"
        src="/images/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
        alt=""
      />
      <img
        className="productGallery__img--2"
        src="/images/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
        alt=""
      />

      <img
        className="productGallery__img--3"
        src="/images/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
        alt=""
      />
    </div>
  );
}
