import { React, useState } from "react";

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  function increaseQuantity(event) {
    console.log(event.currentTarget);
    setQuantity(quantity + 1);
  }

  function decreaseQuantity(event) {
    console.log(event.currentTarget);
    if (quantity > 1) setQuantity(quantity - 1);
  }

  return (
    <div className="quantity-button">
      <p onClick={decreaseQuantity} className="quantity-button--decrease">
        -
      </p>
      <p className="quantity-button__text">{quantity}</p>
      <p onClick={increaseQuantity} className="quantity-button--increase">
        +
      </p>
    </div>
  );
}
