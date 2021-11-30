import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
import {
  Navigation,
  Cart,
  Footer,
  OrderConformation,
  ScrollToTop,
} from "./components";
import { Home, CategoryPage, ProductDetailPage, CheckoutPage } from "./pages";
import { ModalProvider } from "./components/context/modalContext";
import "./app.css";

// const stripeLoadedPromise = loadStripe(process.env.REACT_APP_API_KEY);
function App() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [rerender, setRerender] = useState(false);

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
    //Give the quantity buttons an id or index so i can compare them with iterated products / establish a connection
    const change = event.currentTarget.id;
    const indexButton = Number(event.currentTarget.dataset.index);

    const productToUpdate = cart.find(
      (product, index) => index === indexButton
    );

    if (change === "increase") {
      productToUpdate.quantity += 1;
      setRerender(!rerender);
    } else if (productToUpdate.quantity !== 0) {
      productToUpdate.quantity -= 1;
      setRerender(!rerender);
    }

    setCart(cart.filter((product) => product.quantity !== 0));
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
