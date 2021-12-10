import React from "react";
import { useParams } from "react-router-dom";
import products from "../products.json";
import {
  CategoryBanner,
  ProductCard,
  CategoryCards,
  ShopIntro,
} from "../components";

export default function CategoryPage() {
  const params = useParams();
  const category = products[params.category];

  return (
    <>
      <CategoryBanner title={params.category} />
      <div className="container">
        {category.map((product) => (
          <ProductCard
            key={product.id}
            linkTo={`/${params.category}/${product.name.split(` `).join(`-`)}`}
            product={product}
          />
        ))}
        <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
        <ShopIntro />
      </div>
    </>
  );
}
