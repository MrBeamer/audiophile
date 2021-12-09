import React from "react";

export default function Paragraph(props) {
  const {
    maxWidth = "unset",
    color = "#000000",
    opacity = "0.5",
    margin = "32px 0 0 0",
    children,
  } = props;

  const styles = {
    maxWidth: maxWidth,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "25px",
    color: color,
    opacity: opacity,
    margin: margin,
  };

  // const customClass = clsx({
  //   "paragraph--banner": width === "small",
  //   "paragraph--product": width === "small",
  //   "paragraph--features": width === "medium",
  // });

  // do you pass styles as props ??
  //349 banner text
  //444 confirmation text
  //445 product text
  //445 info text
  //635 features text

  return <p style={styles}>{children}</p>;
}
