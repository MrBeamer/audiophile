import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./navigation.css";
import { sumCart } from "../helpers";
import { ModalContext } from "../context/modalContext";

export default function Navigation(props) {
  const context = useContext(ModalContext);
  const { cart } = props;
  const sumQuantity = cart?.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <nav className="nav">
      <Logo />
      <div className="nav__nav-links">
        <NavLink className="nav__nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav__nav-link" to="headphones">
          Headphones
        </NavLink>
        <NavLink className="nav__nav-link" to="/speakers">
          Speakers
        </NavLink>
        <NavLink className="nav__nav-link" to="/earphones">
          Earphones
        </NavLink>
      </div>
      {cart.length > 0 ? (
        <div className="nav__cart-quantity">{sumQuantity}</div>
      ) : null}
      <img
        className="nav__cart-icon"
        onClick={() => context.toggleModal("cart")}
        src="/images/icon-cart.svg"
        alt="shopping-cart icon"
      />
    </nav>
  );
}
