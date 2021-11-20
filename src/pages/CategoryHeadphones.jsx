import React from "react";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import ProductCard from "../components/ProductCard/ProductCard";

export default function CategoryHeadphones() {
  return (
    <>
      <CategoryBanner title="HEADPHONES" />
      <div className="container">
        <ProductCard
          imgPath="images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
          title="XX99 Mark II Headphones"
          paragraph="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        />
      </div>
    </>
  );
}
