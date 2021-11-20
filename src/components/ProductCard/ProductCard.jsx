import React from "react";
import "./productCard.css";
import Overline from "../TextElements/Overline";
import ProductHeadline from "../TextElements/ProductHeadline";
import Paragraph from "../TextElements/Paragraph";

export default function ProductCard(props) {
  const { imgPath, title, paragraph, price = "1300$", styles = "" } = props;
  // const imgRight = right ?  "right": { gridColumn: "2" }, : {};
  // const textLeft = left ? { gridColumn: "1", gridRow: "1" } : {};

  const customStyles = styles
    ? { right: { gridColumn: "2" }, left: { gridColumn: "1", gridRow: "1" } }
    : {};
  console.log(customStyles);
  console.log(customStyles.right);
  console.log(customStyles.left);

  return (
    <div className="productCard">
      <div style={customStyles.right} className="productCard__image-frame">
        <img className="productCard__image" src={imgPath} alt="" />
      </div>
      <div style={customStyles.left} className="productCard__content">
        <Overline />
        <ProductHeadline>{title}</ProductHeadline>
        <Paragraph>{paragraph}</Paragraph>
        {/* <p>{price}</p> */}
        <button className="btn btn--orange">See Product</button>
      </div>
    </div>
  );
}
