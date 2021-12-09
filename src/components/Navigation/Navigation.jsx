import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CategoryCards, Logo, ModalContext } from "../";
import "./navigation.css";
import "animate.css";

export default function Navigation(props) {
  const context = useContext(ModalContext);
  const { cart } = props;
  const sumQuantity = cart?.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      <nav className="nav">
        <div className="nav__mobile--menu">
          <i
            className="fas fa-bars"
            onClick={() => context.toggleModal("navbar")}
          ></i>
          <Logo />
        </div>
        <div className="nav__nav-links collapsed">
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
          src="/images/shared/icon-cart.svg"
          alt="shopping-cart icon"
        />
      </nav>
      {context.isShowing.navbar ? (
        <>
          <div
            className="nav__mask animate__animated animate__fadeIn"
            onClick={() => context.toggleModal("navbar")}
          ></div>
          <nav className="nav__mobile-wrapper animate__animated animate__fadeIn">
            <div className="nav__mobile">
              <CategoryCards></CategoryCards>
            </div>
          </nav>
        </>
      ) : null}
    </>
  );
}
