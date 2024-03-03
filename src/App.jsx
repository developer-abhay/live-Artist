import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Artist from "./pages/Artist/Artist";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/contact" element={<Contact />} />
          <Route />
          <Route />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
