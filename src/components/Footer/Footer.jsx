import React from "react";
import "./footer.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

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
          <i class="fab fa-facebook-square"></i>
        </li>
        <li>
          <i class="fab fa-twitter-square"></i>
        </li>
        <li>
          <i class="fab fa-instagram-square"></i>
        </li>
      </ul>
    </div>
  );
}
