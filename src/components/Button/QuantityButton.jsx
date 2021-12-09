import { React } from "react";

export default function QuantityButton(props) {
  const { onProductQuantityChange, quantity = "1", children, ...rest } = props;

  return (
    <div className="quantity-button">
      <p
        onClick={onProductQuantityChange}
        className="quantity-button--decrease"
        id="decrease"
        {...rest}
      >
        -
      </p>
      <p className="quantity-button__text">{children ? children : quantity}</p>
      <p
        onClick={onProductQuantityChange}
        className="quantity-button--increase"
        id="increase"
        {...rest}
      >
        +
      </p>
    </div>
  );
}
