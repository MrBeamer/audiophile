import React from "react";
import {
  ShopIntro,
  CategoryCards,
  HomeBanner,
  ProductGrid,
} from "../components";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <div className="container">
        <CategoryCards style={{ marginTop: "120px", marginBottom: "168px" }} />
        <ProductGrid />
        <ShopIntro />
      </div>
    </>
  );
}
