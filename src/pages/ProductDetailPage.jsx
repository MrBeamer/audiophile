import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard/ProductCard";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import Paragraph from "../components/TextElements/Paragraph";
import ShopIntro from "../components/ShopIntro/ShopIntro";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import Recommendation from "../components/Recommendation/Recommendation";
import Accessories from "../components/Accessories/Accessories";

import products from "../products.json";

export default function ProductDetailPage(props) {
  const params = useParams();
  const category = products[params.category];
  const productName = params.product;
  const [product, setProduct] = useState({});
  const { onProductAdd, onProductQuantityChange, quantity } = props;

  useEffect(() => {
    const currentProduct = category.find(
      (product) => product.name.split(" ").join("-") === productName
    );
    // console.log(currentProduct);
    setProduct(currentProduct);
  }, [category, productName]);

  return (
    <div className="container--productDetail">
      <ProductCard
        product={product}
        detailPage={true}
        onProductAdd={onProductAdd}
        onProductQuantityChange={onProductQuantityChange}
        quantity={quantity}
      />

      <div className="productDetail__features">
        {/* <h3 className="productDetail__features--headline">Features</h3> */}
        <Paragraph maxWidth={"635px"} margin={"0 0 0 0"}>
          {product.features}
        </Paragraph>
        <Accessories></Accessories>
      </div>
      <ProductGallery product={product} />
      <Recommendation />
      <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
      <ShopIntro />
    </div>
  );
}

// fix the product gallery and the in the box components
