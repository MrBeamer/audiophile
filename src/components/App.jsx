import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
import "./app.css";
import Navigation from "./Navigation/Navigation";
import Cart from "./Cart/Cart";
import Footer from "./Footer/Footer";
import Home from "../pages/Home";
import CategoryPage from "../pages/CategoryPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CheckoutPage from "../pages/CheckoutPage";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import OrderConformation from "./OrderConformation/OrderConformation";
import { ModalProvider } from "./context/modalContext";

// const stripeLoadedPromise = loadStripe(process.env.REACT_APP_API_KEY);
function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  function handleProductQuantityChange(event) {
    const change = event.currentTarget.id;
    if (change === "increase") {
      setQuantity(quantity + 1);
    } else if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

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

  function handleUpdateCart(event) {
    const change = event.currentTarget.id;
    console.log(change);
    cart.map((product) => {
      console.log(product.quantity);
      return (product.quantity -= -1);
    });

    // let quantity = product.quantity;
    // if (change === "increase") {
    //   setQuantity(quantity + 1);
    //   product.quantity = quantity;
    // } else if (quantity > 1) {
    //   setQuantity(quantity - 1);
    //   product.quantity = quantity;
    // }
    // return product;
  }

  function handleRemoveAllProducts(cart) {
    if (cart.length > 0) setCart([]);
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ModalProvider>
        <div className="app">
          <header>
            <Navigation cart={cart} />
            <Cart
              cart={cart}
              onRemoveAllProducts={handleRemoveAllProducts}
              onUpdateCart={handleUpdateCart}
            />
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
                    onProductQuantityChange={handleProductQuantityChange}
                    quantity={quantity}
                  />
                }
              />
              <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
            </Routes>
            <OrderConformation cart={cart} />
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </div>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
