import React, { useContext, useState } from "react";
import "./orderConformation.css";
import Button from "../Button/Button";
import { ModalContext } from "../context/modalContext";
import { sumCart } from "../helpers";
import Paragraph from "../TextElements/Paragraph";
import "animate.css";

export default function OrderConformation(props) {
  const { cart } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const context = useContext(ModalContext);
  const total = sumCart(cart);
  const shipping = 50;

  function handleExpand() {
    setIsExpanded((prevState) => !prevState);
  }
  let length = isExpanded ? cart.length : 1;

  if (context.isShowing.conformation)
    return (
      <>
        <div className="conformation-mask animate__animated animate__fadeIn"></div>
        <div className="conformation animate__animated animate__fadeIn">
          <div className="conformation__title--wrapper">
            <h3 className="conformation__title">
              THANK YOU <br /> FOR YOUR ORDER
            </h3>
            <img
              className="conformation__icon"
              src="/images/complete.svg"
              alt="complete icon"
            />
          </div>
          <Paragraph margin={"24px 0 0 0"}>
            You will receive an email confirmation shortly.
          </Paragraph>
          <div className="conformation_overview">
            <div className="conformation__items">
              {cart?.slice(0, length).map((product, index) => {
                return (
                  <div key={index} className="conformation__item">
                    <img
                      className="conformation__item--image"
                      src={product.image.cart}
                      alt={`${product.name} ${product.category}`}
                    />
                    <div>
                      <p className="conformation__item--product-name">
                        {product.shortName}
                      </p>
                      <p className="conformation__item--price">
                        {`€ ${product.price}`}
                      </p>
                    </div>
                    <p className="conformation__item--quantity">{`x${product.quantity}`}</p>
                  </div>
                );
              })}
              {cart.length > 1 && (
                <p
                  className="conformation__expand--overview"
                  onClick={handleExpand}
                >
                  {length === 1
                    ? `and ${cart.length - 1} other item(s)`
                    : "View less"}
                </p>
              )}
            </div>
            <div
              className={
                isExpanded
                  ? "conformation__total expanded"
                  : "conformation__total"
              }
            >
              <div className="conformation__total--wrapper">
                <p className="conformation__total--title">Grand Total</p>
                <p className="conformation__total--price">{`€ ${
                  total + shipping
                }`}</p>
              </div>
            </div>
          </div>
          <Button
            onClick={() => context.toggleModal("conformation")}
            linkTo="/"
            style={{ width: "100%" }}
            backgroundColor="orange"
          >
            Back to home
          </Button>
        </div>
      </>
    );
  else return null;
}
