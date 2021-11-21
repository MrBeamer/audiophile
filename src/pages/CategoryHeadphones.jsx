import React from "react";
import { Routes, Route } from "react-router-dom";
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
          imgPath="images/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
          title="XX99 Mark I Headphones"
          paragraph="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
          styles="mirrored"
        />

        <ProductCard
          imgPath="images/product-xx59-headphones/desktop/image-category-page-preview.jpg"
          title="XX59Headphones"
          paragraph="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        />
        <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
        <ShopIntro />

        {/* <Routes>
          <Route exact path="/headphones/xx99-mark-II"></Route>
          <Route exact path="/about/team">
            <h2>About the Team</h2>
          </Route>
        </Routes> */}
      </div>
    </>
  );
}
