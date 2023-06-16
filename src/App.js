import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import Skills from "./routes/Skills";
import Certificate from "./routes/Certificate";
import Portfolio from "./routes/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/certificate' element={<Certificate />} />
      </Routes>
    </>
  );
}

export default App;
