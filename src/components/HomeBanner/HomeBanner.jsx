import React from "react";
import { Overline, Button, Paragraph } from "../";
import "./homeBanner.css";

export default function HomeBanner() {
  return (
    <div className="home-banner">
      <div className="home-banner__content">
        <Overline color="white">New Product</Overline>
        <h1 className="home-banner__title">XX99 Mark II Headphones</h1>

        <Paragraph
          color="#fff"
          maxWidth="349px"
          opacity="0.75"
          margin="24px 0 40px 0"
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Paragraph>
        <Button linkTo="headphones/xx99-mark-ii" backgroundColor="orange">
          See Product
        </Button>
      </div>
      <img
        className="home-banner__image desktop"
        src="/images/home/desktop/hero.jpeg"
        alt="black xx99-mark-two-headphones"
      />
    </div>
  );
}
