import React from "react";
import "./categoryCard.css";

export default function CategoryCard() {
  return (
    <div className="category-card">
      <img
        className="category-card__image"
        src="/images/shared/desktop/image-category-thumbnail-headphones.png"
        alt="headphones"
      />
      <h6 className="category-card__title">Headphones</h6>
      <div>
        <span className="category-card__link">Shop </span>
        <img
          src="/images/shared/desktop/icon-arrow-right.svg"
          alt="orange arrow right"
        />
      </div>
    </div>
  );
}
