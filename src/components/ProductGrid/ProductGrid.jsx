import React, { useState, useEffect } from "react";
import "./productGrid.css";
import Button from "../Button/Button";

export default function ProductGrid() {
  const [screenSize, setScreenSize] = useState("");

  const tabletScreen = window.matchMedia("(max-width: 1185px)");
  const mobileScreen = window.matchMedia("(max-width: 416px)");

  useEffect(() => {
    if (mobileScreen.matches) {
      setScreenSize("mobile");
    } else if (tabletScreen.matches) {
      setScreenSize("tablet");
    } else {
      setScreenSize("desktop");
    }
  }, [mobileScreen.matches, tabletScreen.matches, screenSize]);

  return (
    <div className="product-grid">
      <div className="product-ZX9">
        <div className="product-ZX9__container">
          <img
            className="product-ZX9__image desktop-image"
            src={`/images/home/${screenSize}/image-speaker-zx9.png`}
            alt="ZX9 Speaker"
          />
          <img
            className="product-ZX9__image tablet-image"
            src="images/home/tablet/image-speaker-zx9.png"
            alt="ZX9 Speaker"
          />
          <img
            className="product-ZX9__circles"
            src="/images/home/desktop/pattern-circles.svg"
            alt="Circle pattern"
          />
        </div>
        <div className="product-ZX9__content">
          <h2 className="product-ZX9__title">ZX9 SPEAKER</h2>
          <p className="product-ZX9__paragraph">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button linkTo="speakers/zx9" backgroundColor="black">
            See Product
          </Button>
        </div>
      </div>
      <div className="product-ZX7">
        <div className="product-ZX7__content">
          <h2 className="product-ZX7__title">ZX7 SPEAKER</h2>
          <Button linkTo="speakers/zx7" backgroundColor="outline">
            See Product
          </Button>
        </div>
      </div>
      <div className="product-YX1">
        <div className="product-YX1__image"></div>
        <div className="product-YX1__content">
          <div className="product-YX1__align--left">
            <h2 className="product-YX1__title">YX1 Earphones</h2>
            <Button linkTo="earphones/yx1-wireless" backgroundColor="outline">
              See Product
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
