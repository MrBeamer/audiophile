import React from "react";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import ProductCard from "../components/ProductCard/ProductCard";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import ShopIntro from "../components/ShopIntro/ShopIntro";

export default function CategoryEarphones() {
  return (
    <>
      <CategoryBanner title="EARPHONES" />
      <div className="container">
        <ProductCard
          imgPath="images/product-yx1-earphones/desktop/image-category-page-preview.jpg"
          title="YX1 WIRELESS EARPHONES"
          paragraph="Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        />

        <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
        <ShopIntro />
      </div>
    </>
  );
}
