import React from "react";
import "./homeBanner.css";

export default function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="home-banner__content">
        <p className="home-banner__overline overline">NEW PRODUCT</p>
        <h1 className="home-banner__title">XX99 Mark II Headphones</h1>
        <p className="home-banner__paragraph">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="btn btn--orange">See Product</button>
      </div>
      <img
        className="home-banner__image"
        src="/images/home/desktop/hero.jpeg"
        alt="black xx99-mark-two-headphones"
      />
    </div>
  );
}
