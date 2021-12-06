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
    detailPage = false,
    onProductAdd = () => {},
    onProductQuantityChange,
    quantity,
    product,
  } = props;

  const windowSize = window.matchMedia("(min-width: 770px)");
  let customStyles = "";
  if (windowSize.matches) {
    customStyles =
      product.position === "mirrored"
        ? {
            right: { gridColumn: "2" },
            left: { gridColumn: "1", gridRow: "1" },
          }
        : {};
  }

  return (
    <div className="productCard">
      <div style={customStyles.right} className="productCard__image-frame">
        <img
          className="productCard__image desktop-image"
          src={product.image?.product}
          alt={`${product.name} ${product.category}`}
        />

        <img
          className="productCard__image tablet-image "
          src={product.image?.productTablet}
          alt={`${product.name} ${product.category}`}
        />

        <img
          className="productCard__image mobile-image "
          src={product.image?.productMobile}
          alt={`${product.name} ${product.category}`}
        />
      </div>

      <div style={customStyles.left} className="productCard__content">
        <Overline />
        <ProductHeadline>{`${product.name} ${product.category}`}</ProductHeadline>
        <Paragraph margin="32px 0 38px 0">{product.description}</Paragraph>
        {detailPage && (
          <p className="productCard__price">{`€ ${product.price}`}</p>
        )}
        <div className="productCard__buttons">
          {detailPage && (
            <QuantityButton
              quantity={quantity}
              onProductQuantityChange={onProductQuantityChange}
            />
          )}
          <Button
            onClick={() => onProductAdd(product)}
            linkTo={linkTo}
            backgroundColor="orange"
          >
            {detailPage ? "Add to cart" : "See Product"}
          </Button>
        </div>
      </div>
    </div>
  );
}
