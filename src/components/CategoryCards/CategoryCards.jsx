import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./categoryCards.css";

export default function CategoryCards(props) {
  const { style } = props;
  return (
    <div style={style} className="category-cards">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
}
