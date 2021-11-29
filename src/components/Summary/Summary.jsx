import React, { useContext } from "react";
import "./summary.css";
import Button from "../Button/Button";
import { ModalContext } from "../context/modalContext";
import { sumCart } from "../helpers";

export default function Summary(props) {
  const context = useContext(ModalContext);
  const { cart, formik } = props;

  const vat = 0.2;
  const shipping = 50;
  const total = sumCart(cart);

  return (
    <div className="summary">
      <h6>Summary</h6>
      <div className="summary__items">
        {cart.map((product, index) => {
          return (
            <div key={index} className="summary__item">
              <img
                className="summary__item--image"
                src={product.image.cart}
                alt={`${product.name} ${product.category}`}
              />
              <div>
                <p className="summary__item--product-name">
                  {product.shortName}
                </p>
                <p className="summary__item--price">{`€ ${product.price}`} </p>
              </div>
              <p className="summary__item--quantity">{`x${product.quantity}`}</p>
            </div>
          );
        })}
      </div>
      <div>
        <div className="summary__container">
          <p className="summary__title">Total</p>
          <p className="summary__numbers">{`€ ${total}`}</p>
        </div>
        <div className="summary__container">
          <p className="summary__title">Shipping</p>
          <p className="summary__numbers">{`€ ${shipping}`}</p>
        </div>
        <div className="summary__container">
          <p className="summary__title">VAT (INCLUDED)</p>
          <p className="summary__numbers">{`€ ${(total * vat).toFixed(0)}`}</p>
        </div>
      </div>
      <div className="summary__container">
        <p className="summary__title">GRAND TOTAL</p>
        <p className="summary__numbers last">{`€ ${total + shipping}`}</p>
      </div>

      <button
        className="btn btn--submit"
        type="submit"
        disabled={
          !(formik.isValid && formik.dirty && formik.values.payment !== "")
        }
        onClick={() => context.toggleModal("conformation")}
      >
        Continue & Pay
      </button>
    </div>
  );
}
