import React, { useState, useEffect, createContext, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
export const context = createContext();

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((qwe) => {
        setData(qwe);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  return (
    <Suspense fallback="loading...">
      <context.Provider value={{ data, loading, error }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/product/:title" element={<Product />} />
        </Routes>
      </context.Provider>
    </Suspense>
  );
}

export default App;
