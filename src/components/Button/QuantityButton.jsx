import { React } from "react";

export default function QuantityButton(props) {
  const { onProductQuantityChange, quantity = "1", children, ...rest } = props;
  // const [quantity, setQuantity] = useState(1);

  return (
    <div className="quantity-button" {...rest}>
      <p
        onClick={onProductQuantityChange}
        className="quantity-button--decrease"
        id="decrease"
      >
        -
      </p>
      <p className="quantity-button__text">{children ? children : quantity}</p>
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
