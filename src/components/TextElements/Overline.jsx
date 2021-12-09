import React from "react";
import clsx from "clsx";
import "./textElements.css";

export default function Overline(props) {
  const { color, children = "New Product" } = props;

  const customClass = clsx({
    "overline--orange": color === "orange",
    "overline--white": color === "white",
  });

  return <p className={`overline ${customClass}`}>{children}</p>;
}
