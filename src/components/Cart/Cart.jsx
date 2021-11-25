import { React, useState } from "react";
import "./cart.css";
import QuantityButton from "../Button/QuantityButton";
import Button from "../Button/Button";

export default function Cart(props) {
  const { show, cart } = props;

  if (show)
    return (
      <>
        <div className="cart-mask"></div>
        <div className="cart">
          <div className="cart__quantity-control">
            <p className="cart__quantity-control--display">{`Cart (${cart.length})`}</p>
            <p className="cart__quantity-control--remove">Remove all</p>
          </div>
          <div className="cart__items">
            {cart.map((product) => {
              return (
                <div className="cart__item">
                  <img
                    className="cart__item--image"
                    src={product.image.cart}
                    alt={`${product.name} ${product.category}`}
                  />
                  <div>
                    <p className="cart__item--product-name">{product.name}</p>
                    <p className="cart__item--price">{`€ ${product.price}`} </p>
                  </div>
                  <QuantityButton />
                  {/* <p className="cart__item--quantity"></p> */}
                </div>
              );
            })}
          </div>
          <div className="cart__total">
            <p className="cart__total--title">Total:</p>
            <p className="cart__total--price">{`€ 5000`}</p>
          </div>
          <Button style={{ width: "100%" }} backgroundColor="orange">
            Checkout
          </Button>
        </div>
      </>
    );
  else return null;
}
