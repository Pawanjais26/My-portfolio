import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Showcase
          heading="Hi There, I'm"
          heading1='Pawan Jaiswal'
          heading2='Full Stack Web Developer'
          work='Work'
        />
      </div>
      <Footer />
    </>
  );
}
