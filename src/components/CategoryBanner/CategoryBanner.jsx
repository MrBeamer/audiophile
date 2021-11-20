import React from "react";
import "./categoryBanner.css";

export default function CategoryBanner({ title }) {
  return (
    <div className="category-banner">
      <h2>{title}</h2>
    </div>
  );
}
