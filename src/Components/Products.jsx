import React, { useState } from "react";
import Cards from "./Cards";

const Products = ({ value, setValue }) => {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <Cards value={value} setValue={setValue} />
        </div>
      </section>
    </>
  );
};

export default Products;
