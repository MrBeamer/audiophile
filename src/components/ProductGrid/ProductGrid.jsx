import React from "react";
import "./productGrid.css";

export default function ProductGrid() {
  return (
    <div className="product-grid">
      <div className="product-ZX9">
        <div className="product-ZX9__container">
          <img
            className="product-ZX9__image"
            src="/images/home/desktop/image-speaker-zx9.png"
            alt="ZX9 Speaker"
          />
          <img
            className="product-ZX9__circles"
            src="/images/home/desktop/pattern-circles.svg"
            alt="Circle pattern"
          />
        </div>
        <div className="product-ZX9__content">
          <h2 className="product-ZX9__title">ZX9 SPEAKER</h2>
          <p className="product-ZX9__paragraph">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="btn btn--outline">SEE PRODUCT</button>
        </div>
      </div>
      <div className="product__ZX7"></div>
      <div className="product__YX1"></div>
    </div>
  );
}
