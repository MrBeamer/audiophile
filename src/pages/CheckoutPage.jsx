import React from "react";
import Summary from "../components/Summary/Summary";
import Form from "../components/Form/Form";

export default function CheckoutPage(props) {
  const { cart } = props;
  return (
    <div className="container--checkout">
      <div className="checkout">
        <div className="checkout__form"></div>
        <Form />
        <Summary cart={cart} />
      </div>
    </div>
  );
}
