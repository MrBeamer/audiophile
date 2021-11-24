import { React, useState } from "react";
import "./cart.css";
import QuantityButton from "../Button/QuantityButton";

export default function Cart() {
  const [show, setShow] = useState(false);

  if (show)
    return (
      <>
        <div className="cart-mask"></div>
        <div className="cart">
          <div className="cart__quantity-control">
            <p>Cart (2)</p>
            <p>Remove all</p>
          </div>
          <div className="cart__items">
            <div className="cart__item">
              <img
                className="cart__item--image"
                src="/images/cart/image-xx99-mark-two-headphones.jpg"
                alt="test"
              />
              <div>
                <p className="cart__item--product-name">xx99 mark two</p>
                <p className="cart__item--price">$ 3.999</p>
              </div>
              <QuantityButton />
              {/* <p className="cart__item--quantity"></p> */}
            </div>
          </div>
          <div className="cart__total">
            <p className="cart__total--title">Total:</p>
            <p className="cart__total--price">5000</p>
          </div>
          <button>Checkout</button>;
        </div>
      </>
    );
  else return null;
}
