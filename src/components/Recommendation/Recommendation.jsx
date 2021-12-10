import React from "react";
import { Button } from "../";
import "./recommendation.css";

export default function Recommendation() {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array.slice(0, 3);
  };

  const products = [
    {
      name: "xx99 mark i",
      shortName: "xx99 mk i",
      category: "headphones",
      image: "/images/shared/desktop/image-xx99-mark-one-headphones.jpg",
    },
    {
      name: "xx99 mark ii",
      shortName: "xx99 mk ii",
      category: "headphones",
      image: "/images/shared/desktop/image-xx99-mark-two-headphones.jpg",
    },
    {
      name: "xx59",
      shortName: "xx59",
      category: "headphones",
      image: "/images/shared/desktop/image-xx59-headphones.jpg",
    },
    {
      name: "zx9",
      shortName: "zx9",
      category: "speaker",
      image: "/images/shared/desktop/image-zx9-speaker.jpg",
    },
    {
      name: "zx7",
      shortName: "zx7",
      category: "speaker",
      image: "/images/shared/desktop/image-zx7-speaker.jpg",
    },

    {
      name: "yx1 wireless",
      shortName: "yx1",
      category: "earphones",
      image: "/images/shared/desktop/image-yx1-earphones.jpg",
    },
  ];

  const shuffledProducts = shuffleArray(products);

  return (
    <div className="recommendation">
      <h2 className="recommendation__title">You may also like</h2>

      {shuffledProducts.map((product, index) => {
        return (
          <div key={index} className={`recommendation__product--${index + 1}`}>
            <img
              className="recommendation__image"
              src={product.image}
              alt={`${product.name} ${product.category} `}
            />
            <p className="recommendation__product-name">{product.name}</p>
            <Button backgroundColor="orange">See Product</Button>
          </div>
        );
      })}
    </div>
  );
}
