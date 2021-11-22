import React from "react";
import "./recommendation.css";
import Button from "../Button/Button";

export default function Recommendation() {
  return (
    <div className="recommendation">
      <h2 className="recommendation__title">You may also like</h2>
      <div className="recommendation__product--1">
        <img
          className="recommendation__image"
          src="/images/shared/desktop/image-xx99-mark-one-headphones.jpg"
          alt=""
        />
        <p className="recommendation__product-name">XX99 MARK I</p>
        <Button backgroundColor="orange">See Product</Button>
      </div>
      <div className="recommendation__product--2">
        <img
          className="recommendation__image"
          src="/images/shared/desktop/image-xx59-headphones.jpg"
          alt=""
        />
        <p className="recommendation__product-name">XX59</p>
        <Button backgroundColor="orange">See Product</Button>
      </div>
      <div className="recommendation__product--3">
        <img
          className="recommendation__image"
          src="/images/shared/desktop/image-zx9-speaker.jpg"
          alt=""
        />
        <p className="recommendation__product-name">ZX9 SPEAKER</p>
        <Button backgroundColor="orange">See Product</Button>
      </div>
    </div>
  );
}
