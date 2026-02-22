import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
