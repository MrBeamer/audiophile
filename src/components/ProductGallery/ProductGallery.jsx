import React from "react";
import "./productGallery.css";

export default function ProductGallery({ product }) {
  return (
    <div className="productGallery">
      <img
        className="productGallery__img--1 desktop-image"
        src={product.image?.galleryDesktop1}
        alt={`${product.name} ${product.category} `}
      />
      <img
        className="productGallery__img--1 tablet-image"
        src={product.image?.galleryTablet1}
        alt={`${product.name} ${product.category} `}
      />
      <img
        className="productGallery__img--1 mobile-image"
        src={product.image?.galleryMobile1}
        alt={`${product.name} ${product.category} `}
      />

      <img
        className="productGallery__img--2 desktop-image"
        src={product.image?.galleryDesktop2}
        alt={`${product.name} ${product.category} `}
      />
      <img
        className="productGallery__img--2 tablet-image"
        src={product.image?.galleryTablet2}
        alt={`${product.name} ${product.category} `}
      />
      <img
        className="productGallery__img--2 mobile-image"
        src={product.image?.galleryMobile2}
        alt={`${product.name} ${product.category} `}
      />

      <img
        className="productGallery__img--3 desktop-image"
        src={product.image?.galleryDesktop3}
        alt={`${product.name} ${product.category} `}
      />
      <img
        className="productGallery__img--3 tablet-image"
        src={product.image?.galleryTablet3}
        alt={`${product.name} ${product.category} `}
      />
      <img
        className="productGallery__img--3 mobile-image"
        src={product.image?.galleryMobile3}
        alt={`${product.name} ${product.category} `}
      />
    </div>
  );
}
