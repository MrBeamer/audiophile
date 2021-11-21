import React from "react";
import "./productGrid.css";
import Button from "../Button/Button";

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
          <Button backgroundColor="black">See Product</Button>
        </div>
      </div>
      <div className="product-ZX7">
        <div className="product-ZX7__content">
          <h2 className="product-ZX7__title">ZX7 SPEAKER</h2>
          <Button backgroundColor="outline">See Product</Button>
        </div>
      </div>
      <div className="product-YX1">
        <div className="product-YX1__image"></div>
        <div className="product-YX1__content">
          <div className="product-YX1__align--left">
            <h2 className="product-YX1__title">YX1SPEAKER</h2>
            <Button backgroundColor="outline">See Product</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
