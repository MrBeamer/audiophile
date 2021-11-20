import React from "react";
import Paragraph from "../TextElements/Paragraph";
import "./shopIntro.css";

export default function ShopIntro(props) {
  const { styles = { margin: "160px 0" } } = props;
  return (
    <div style={styles} className="intro">
      <div className="intro__content">
        <h2 className="intro__title">
          Bringing you the <span>best</span> audio gear
        </h2>
        <Paragraph>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Paragraph>
      </div>
      <img
        className="intro__image"
        src="/images/shared/desktop/image-best-gear.jpg"
        alt="Man wears black headphones"
      />
    </div>
  );
}
