import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Home from "../pages/Home";
import Earphones from "../pages/Earphones";
import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers";

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
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/speakers" element={<Speakers />} />
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
