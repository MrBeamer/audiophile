import React from "react";

export default function Overline(props) {
  const {
    color = "#D87D4A",
    opacity = "1",
    marginBottom = "16px",
    children = "New Product",
  } = props;
  const styles = {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "19px",
    letterSpacing: "10px",
    textTransform: "uppercase",
    color: color,
    opacity: opacity,
    marginBottom: marginBottom,
  };
  return <p style={styles}>{children}</p>;
}
