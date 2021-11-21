import React from "react";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import ProductCard from "../components/ProductCard/ProductCard";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import ShopIntro from "../components/ShopIntro/ShopIntro";

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

        <ProductCard
          imgPath="images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
          title="XX99 Mark II Headphones"
          paragraph="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
          styles="mirrored"
        />

        <ProductCard
          imgPath="images/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
          title="XX99 Mark II Headphones"
          paragraph="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        />
        <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
        <ShopIntro />
      </div>
    </>
  );
}
