import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import "./button.css";

export default function Button(props) {
  const { linkTo = "#", children, backgroundColor, ...rest } = props;

  const customClass = clsx({
    "btn--orange": backgroundColor === "orange",
    "btn--outline": backgroundColor === "outline",
    "btn--black": backgroundColor === "black",
  });

  return (
    <Link to={linkTo} className={`btn ${customClass}`} {...rest}>
      {children}
    </Link>
  );
}
