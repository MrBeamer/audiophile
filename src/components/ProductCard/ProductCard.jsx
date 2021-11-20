import React from "react";
import "./productCard.css";
import Overline from "../TextElements/Overline";
import ProductHeadline from "../TextElements/ProductHeadline";
import Paragraph from "../TextElements/Paragraph";

export default function ProductCard(props) {
  const { imgPath, title, paragraph, price = "1300$" } = props;
  return (
    <div className="productCard">
      <div className="productCard__image-frame">
        <img className="productCard__image" src={imgPath} alt="" />
      </div>
      <div className="productCard__content">
        <Overline />
        <ProductHeadline>{title}</ProductHeadline>
        <Paragraph>{paragraph}</Paragraph>
        {/* <p>{price}</p> */}
        <button className="btn btn--orange">See Product</button>
      </div>
    </div>
  );
}
