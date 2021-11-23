import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Home from "../pages/Home";
import CategoryEarphones from "../pages/CategoryEarphones";
import CategoryHeadphones from "../pages/CategoryHeadphones";
import CategorySpeakers from "../pages/CategorySpeakers";
import ProductDetail from "../pages/ProductDetail";
import products from "../products.json";

// var data = fs.readFileSync("words.json", "utf8");
// var products = JSON.parse(data);
// console.log(products);

function App() {
  console.log(products);
  console.log(products.id);
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/earphones" element={<CategoryEarphones />} />
            <Route path="/headphones" element={<CategoryHeadphones />} />
            <Route path="/speakers" element={<CategorySpeakers />} />
            <Route path="/:category/:product" element={<ProductDetail />} />
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
