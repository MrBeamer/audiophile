import { useState } from "react";

export default function useShowModal() {
  const [isShowing, setIsShowing] = useState(false);
  console.log(isShowing);

  function toggle() {
    setIsShowing((prevState) => !prevState);
    console.log("toggle");
  }

  return [isShowing, toggle];
}
