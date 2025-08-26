import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Navbar value={value} />
      <Header />
      <Products value={value} setValue={setValue} />
      <Footer />
    </>
  );
};

export default App;
