import React from "react";
import "./accessories.css";

export default function Accessories() {
  return (
    <div className="accessories">
      <h3 className="accessories__title">In the box</h3>
      <div className="accessories__elements-container">
        <div className="accessories__element">
          <p className="accessories__quantity">1x</p>
          <p className="accessories_name">Headphone Unit</p>
        </div>
        <div className="accessories__element">
          <p className="accessories__quantity"> 2x</p>
          <p className="accessories_name">Replacement Earcups</p>
        </div>
        <div className="accessories__element">
          <p className="accessories__quantity">1x</p>
          <p className="accessories_name">User Manual</p>
        </div>
        <div className="accessories__element">
          <p className="accessories__quantity">1x</p>
          <p className="accessories_name">3.5mm 5m Audio Cable</p>
        </div>
        <div className="accessories__element">
          <p className="accessories__quantity">1x</p>
          <p className="accessories_name">Travel Bag</p>
        </div>
      </div>
    </div>
  );
}
