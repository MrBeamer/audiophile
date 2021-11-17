import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Home from "../pages/Home";
import CategoryEarphones from "../pages/CategoryEarphones";
import CategoryHeadphones from "../pages/CategoryHeadphones";
import CategorySpeakers from "../pages/CategorySpeakers";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header className="header">
          <Navigation />
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/earphones" element={<CategoryEarphones />} />
            <Route path="/headphones" element={<CategoryHeadphones />} />
            <Route path="/speakers" element={<CategorySpeakers />} />
          </Routes>
        </main>
        <footer className="footer">
          <Footer></Footer>;
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
