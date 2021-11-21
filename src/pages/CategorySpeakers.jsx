import React from "react";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import ProductCard from "../components/ProductCard/ProductCard";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import ShopIntro from "../components/ShopIntro/ShopIntro";

export default function CategorySpeakers() {
  return (
    <>
      <CategoryBanner title="Speakers" />
      <div className="container">
        <ProductCard
          imgPath="images/product-zx9-speaker/desktop/image-category-page-preview.jpg"
          title="ZX9 SPEAKER"
          paragraph="Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        />

        <ProductCard
          imgPath="images/product-zx7-speaker/desktop/image-category-page-preview.jpg"
          title="ZX7 SPEAKER"
          paragraph="Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
          styles="mirrored"
        />

        <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
        <ShopIntro />
      </div>
    </>
  );
}
