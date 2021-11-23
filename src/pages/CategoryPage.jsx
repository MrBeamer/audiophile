import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryBanner from "../components/CategoryBanner/CategoryBanner";
import ProductCard from "../components/ProductCard/ProductCard";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import ShopIntro from "../components/ShopIntro/ShopIntro";
import products from "../products.json";

export default function CategoryPage() {
  const params = useParams();
  // const [category, setCategory] = useState([]);
  const category = products[params.category];
  // console.log(category);
  // console.log(typeof category);
  // console.log(typeof category);
  // useEffect(() => {
  //   //use square brackets to access property of an object with a string/ dynamic variable
  //   setCategory(products[params.category]);
  // }, [params.category]);
  console.log(category);
  return (
    <>
      <CategoryBanner title={params.category} />
      <div className="container">
        {category.map((product) => (
          <ProductCard
            key={product.id}
            styles={product.id === 2 ? "mirrored" : ""}
            imgPath={product.image.category}
            title={`${product.name} ${product.category} `}
            paragraph={product.description}
          />
        ))}
        <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
        <ShopIntro />
      </div>
    </>
  );
}

// ids anpassen
// und mirrored property hinzufugen
