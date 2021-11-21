import React from "react";
import "./productCard.css";
import Overline from "../TextElements/Overline";
import ProductHeadline from "../TextElements/ProductHeadline";
import Paragraph from "../TextElements/Paragraph";
import Button from "../Button/Button";
import QuantityButton from "../Button/QuantityButton";

export default function ProductCard(props) {
  const {
    linkTo,
    imgPath,
    title,
    paragraph,
    styles = "",
    detailPage = false,
    price = "$ 1,499",
  } = props;

  const customStyles = styles
    ? { right: { gridColumn: "2" }, left: { gridColumn: "1", gridRow: "1" } }
    : {};

  console.log(linkTo);

  return (
    <div className="productCard">
      <div style={customStyles.right} className="productCard__image-frame">
        <img className="productCard__image" src={imgPath} alt="" />
      </div>
      <div style={customStyles.left} className="productCard__content">
        <Overline />
        <ProductHeadline>{title}</ProductHeadline>
        <Paragraph margin="32px 0 38px 0">{paragraph}</Paragraph>
        {detailPage && <p className="productCard__price">{price}</p>}
        <div className="productCard__buttons">
          {detailPage && <QuantityButton />}
          <Button linkTo={linkTo} backgroundColor="orange">
            See Product
          </Button>
        </div>
      </div>
    </div>
  );
}
