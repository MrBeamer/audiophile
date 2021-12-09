import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Logo />
      <p className="footer__paragraph">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="footer__copyright">Copyright 2021. All Rights Reserved</p>

      <div className="footer__nav-links">
        <Link className="nav__nav-link" to="/">
          Home
        </Link>
        <Link className="nav__nav-link" to="headphones">
          Headphones
        </Link>
        <Link className="nav__nav-link" to="/speakers">
          Speakers
        </Link>
        <Link className="nav__nav-link" to="/earphones">
          Earphones
        </Link>
      </div>
      <ul className="footer__social-links">
        <li>
          <i className="fab fa-facebook-square"></i>
        </li>
        <li>
          <i className="fab fa-twitter-square"></i>
        </li>
        <li>
          <i className="fab fa-instagram-square"></i>
        </li>
      </ul>
    </div>
  );
}
