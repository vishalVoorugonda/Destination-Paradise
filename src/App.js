import React from "react";
import Navbar from "./components/Navbar";
import ImageScroll from "./components/ImageScroll";
import Booking from "./components/Booking";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      <ImageScroll />
      <Booking />
      <About />
    </div>
  );
}

export default App;
