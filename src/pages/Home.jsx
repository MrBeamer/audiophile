import React from "react";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import ProductGrid from "../components/ProductGrid/ProductGrid";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <div className="container">
        <CategoryCards style={{ marginTop: "120px", marginBottom: "168px" }} />
        <ProductGrid />
      </div>
    </>
  );
}
