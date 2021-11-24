import { React, useState } from "react";

export default function QuantityButton(props) {
  const { onProductQuantityChange, quantity = "1" } = props;
  // const [quantity, setQuantity] = useState(1);

  // function handleProductQuantityChange(event) {
  //   const change = event.currentTarget.id;
  //   if (change === "increase") {
  //     setQuantity(quantity + 1);
  //   } else if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // }

  return (
    <div className="quantity-button">
      <p
        onClick={onProductQuantityChange}
        className="quantity-button--decrease"
        id="decrease"
      >
        -
      </p>
      <p className="quantity-button__text">{quantity}</p>
      <p
        onClick={onProductQuantityChange}
        className="quantity-button--increase"
        id="increase"
      >
        +
      </p>
    </div>
  );
}
