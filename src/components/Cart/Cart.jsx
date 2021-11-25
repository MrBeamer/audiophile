import { React, useState, useEffect } from "react";
import "./cart.css";
import QuantityButton from "../Button/QuantityButton";
import Button from "../Button/Button";

export default function Cart(props) {
  const { show, cart, onCartClick } = props;

  //   const [total, setTotal] = useState([]);

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  console.log(total);

  //   useEffect(() => {
  //     setTotal(prevTotal => prevTotal + cart.map(product => product.price * product.quantity)},[cart])
  // console.log(total)

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
            {cart.map((product, index) => {
              return (
                <div key={index} className="cart__item">
                  <img
                    className="cart__item--image"
                    src={product.image.cart}
                    alt={`${product.name} ${product.category}`}
                  />
                  <div>
                    <p className="cart__item--product-name">
                      {product.shortName}
                    </p>
                    <p className="cart__item--price">{`€ ${product.price}`} </p>
                  </div>
                  <QuantityButton
                    style={{ maxWidth: "96px", maxHeight: "32px" }}
                  >
                    {product.quantity}
                  </QuantityButton>
                </div>
              );
            })}
          </div>
          <div className="cart__total">
            <p className="cart__total--title">Total:</p>
            <p className="cart__total--price">{`€ ${total}`}</p>
          </div>
          <Button
            onClick={() => onCartClick()}
            linkTo="/checkout"
            style={{ width: "100%" }}
            backgroundColor="orange"
          >
            Checkout
          </Button>
        </div>
      </>
    );
  else return null;
}
