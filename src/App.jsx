import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Artist from "./pages/Artist";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { artistList } from "./data/data";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistProfile from "./pages/ArtistProfile";
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
          {artistList.map((item, index) => (
            <Route
              key={index}
              path={`/${item.name}`}
              element={<ArtistProfile props={item} />}
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
