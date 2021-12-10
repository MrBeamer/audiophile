import React from "react";
import "./accessories.css";

export default function Accessories(props) {
  const { product } = props;
  const accessories = product.accessories;

  return (
    <div className="accessories">
      <h3 className="accessories__title">In the box</h3>
      <div className="accessories__elements-container">
        {accessories?.map((accessory, index) => {
          return (
            <div key={index} className="accessories__element">
              <p className="accessories__quantity">{accessory.quantity}</p>
              <p className="accessories_name">{accessory.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
