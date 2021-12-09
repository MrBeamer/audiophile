import React from "react";
import {
  Button,
  Paragraph,
  QuantityButton,
  Overline,
  ProductHeadline,
} from "../";
import "./productCard.css";

export default function ProductCard(props) {
  const {
    linkTo,
    detailPage = false,
    onProductAdd = () => {},
    onProductQuantityChange,
    quantity,
    product,
  } = props;

  return (
    <div className="productCard">
      <div className="productCard__image-frame">
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

      <div className="productCard__content">
        <Overline color="orange" />
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
