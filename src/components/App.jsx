import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import "./app.css";
import Navigation from "./Navigation/Navigation";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

// const stripeLoadedPromise = loadStripe(process.env.REACT_APP_API_KEY);
function App() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  function handleCartClick() {
    setShow((prevState) => !prevState);
    console.log("click");
  }

  function handleProductQuantityChange(event) {
    const change = event.currentTarget.id;
    if (change === "increase") {
      setQuantity(quantity + 1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  console.log(quantity);
  console.log(cart);

  function handleProductAdd(product) {
    const duplicate = cart.some((cartProduct) => {
      return cartProduct.name === product.name;
    });

    if (duplicate) {
      const productToUpdate = cart.find((cartProduct) => {
        return cartProduct.name === product.name;
      });
      productToUpdate.quantity = quantity;
    } else {
      setCart((previousCart) => [
        ...previousCart,
        { ...product, quantity: quantity },
      ]);
    }

    setQuantity(1);
  }
  // const test = { ...product, quantity: quantity };
  // console.log(test);
  // console.log("Adding product " + newProduct.id);
  // take quantity and use spreed operator to put quantity in the product object and update it always when the quantity is changing then push object into cart array
  // console.log("Adding product");
  // console.log(product);

  function handleProductDelete() {
    // console.log("Deleting product " + id);
    console.log("Deleting product");
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <header>
          <Navigation cart={cart} onCartClick={handleCartClick} />
          <Cart cart={cart} show={show} />
          {/* <div className="mask"></div> */}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<CategoryPage />} />
            <Route
              path="/:category/:product"
              element={
                <ProductDetailPage
                  cart={cart}
                  onProductAdd={handleProductAdd}
                  onProductDelete={handleProductDelete}
                  onProductQuantityChange={handleProductQuantityChange}
                  quantity={quantity}
                />
              }
            />
          </Routes>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
