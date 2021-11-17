import React from "react";
import { Link } from "react-router-dom";
import "./categoryCard.css";

export default function CategoryCard(props) {
  const { title, imagePath } = props;
  return (
    <div className="category-card">
      <img className="category-card__image" src={imagePath} alt="headphones" />
      <h6 className="category-card__title">{title}</h6>
      <div>
        <Link to={`/${title}`} className="category-card__link">
          Shop
        </Link>
        <img
          className="category-card__icon"
          src="/images/shared/desktop/icon-arrow-right.svg"
          alt="orange arrow right"
        />
      </div>
    </div>
  );
}
