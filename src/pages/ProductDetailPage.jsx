import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard/ProductCard";
import CategoryCards from "../components/CategoryCards/CategoryCards";
import Paragraph from "../components/TextElements/Paragraph";
import ShopIntro from "../components/ShopIntro/ShopIntro";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import Recommendation from "../components/Recommendation/Recommendation";
import products from "../products.json";

export default function ProductDetailPage() {
  const params = useParams();
  const category = products[params.category];
  const productName = params.product;
  const [product, setProduct] = useState({});
  console.log(params);
  console.log(category);

  useEffect(() => {
    const currentProduct = category.find(
      (product) => product.name.split(" ").join("-") === productName
    );
    console.log(currentProduct);
    setProduct(currentProduct);
  }, [category, productName]);

  return (
    <div className="container--productDetail">
      <ProductCard
        imgPath={product.image?.product}
        title={`${product.name} ${product.category}`}
        paragraph={product.description}
        detailPage={true}
      />

      <div className="productDetail__features">
        <div>
          <h3>Features</h3>
          <Paragraph>{product.features}</Paragraph>
        </div>
        <div className="accessories">
          <h3 className="accessories__title">In the box</h3>
          <div className="accessories__element">
            <p className="accessories__quantity">1x</p>
            <p className="accessories_name">Headphone Unit</p>
          </div>
          <div className="accessories__element">
            <p className="accessories__quantity"> 2x</p>
            <p className="accessories_name">Replacement Earcups</p>
          </div>
          <div className="accessories__element">
            <p className="accessories__quantity">1x</p>
            <p className="accessories_name">User Manual</p>
          </div>
          <div className="accessories__element">
            <p className="accessories__quantity">1x</p>
            <p className="accessories_name">3.5mm 5m Audio Cable</p>
          </div>
          <div className="accessories__element">
            <p className="accessories__quantity">1x</p>
            <p className="accessories_name">Travel Bag</p>
          </div>
        </div>
      </div>
      <ProductGallery product={product} />
      <Recommendation />
      <CategoryCards style={{ marginTop: "0", marginBottom: "0" }} />
      <ShopIntro />
    </div>
  );
}

//fix br in feature text and find out how to fix random jumps when clicking on links from routers
// build cart
// fix the product gallery and the in the box components
