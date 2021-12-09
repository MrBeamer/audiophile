import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./categoryCards.css";

export default function CategoryCards({ style }) {
  return (
    <div style={style} className="category-cards">
      <CategoryCard
        title="headphones"
        imagePath="/images/shared/desktop/image-category-thumbnail-headphones.png"
      />
      <CategoryCard
        title="speakers"
        imagePath="/images/shared/desktop/image-category-thumbnail-speakers.png"
      />
      <CategoryCard
        title="earphones"
        imagePath="/images/shared/desktop/image-category-thumbnail-earphones.png"
      />
    </div>
  );
}
