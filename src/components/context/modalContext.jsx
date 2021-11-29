import React, { createContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider(props) {
  const [isShowing, setIsShowing] = useState({
    cart: false,
    conformation: false,
  });

  function toggleModal(modal) {
    setIsShowing((prevState) => ({ [modal]: !prevState[modal] }));
  }

  function keyHideModal(event) {
    console.log(event?.key);
    if ((event?.key === "Escape" && isShowing.cart) || isShowing.conformation)
      setIsShowing((prevState) => ({ [modal]: false }));
  }

  const modal = {
    isShowing: isShowing,
    toggleModal: toggleModal,
    keyHideModal: keyHideModal,
  };

  return (
    <ModalContext.Provider value={modal}>
      {props.children}
    </ModalContext.Provider>
  );
}

export { ModalContext, ModalProvider };
