import React from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import Paragraph from "../components/TextElements/Paragraph";
import ShopIntro from "../components/ShopIntro/ShopIntro";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import Recommendation from "../components/Recommendation/Recommendation";

export default function ProductDetailHeadphones() {
  const customStyles = {};

  return (
    <div className="container--productDetail">
      <ProductCard
        imgPath="/images/product-xx99-mark-two-headphones/desktop/image-product.jpg"
        title="X99 Mark II Headphones"
        paragraph="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
        detailPage={true}
      />

      <div className="productDetail__features">
        <div>
          <h3>Features</h3>
          <Paragraph>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat. <br /> <br /> The advanced Active Noise
            Cancellation with built-in equalizer allow you to experience your
            audio world on your terms. It lets you enjoy your audio in peace,
            but quickly interact with your surroundings when you need to.
            Combined with Bluetooth 5. 0 compliant connectivity and 17 hour
            battery life, the XX99 Mark II headphones gives you superior sound,
            cutting-edge technology, and a modern design aesthetic.
          </Paragraph>
        </div>
        <div className="accessories">
          <h3 className="accessories__title">In the box</h3>
          <div className="accessories__element">
            <p className="accessories__quantity">1x</p>
            <p className="accessories_name">Headphone Unit</p>
          </div>
          <div className="accessories__element">
            <p className="accessories__quantity"> 2x</p>
            <p className="accessories_name">Replacement Earcups</p>
          </div>
          <div className="accessories__element">
            <p className="accessories__quantity">1x</p>
            <p className="accessories_name">User Manual</p>
          </div>
          <div className="accessories__element">
            <p className="accessories__quantity">1x</p>
            <p className="accessories_name">3.5mm 5m Audio Cable</p>
          </div>
          <div className="accessories__element">
            <p className="accessories__quantity">1x</p>
            <p className="accessories_name">Travel Bag</p>
          </div>
        </div>
      </div>
      <ProductGallery />
      <Recommendation />
      <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
      <ShopIntro />
    </div>
  );
}
