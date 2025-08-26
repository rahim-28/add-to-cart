import React, { useState } from "react";

const Cards = ({ value, setValue }) => {
  const cardProduct = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: "₹ 350 - ₹ 450",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl51vQ9yS5qk-iYTCK7DrECHB3uDKJ4eE7Ig&s",
    },
    {
      id: 2,
      name: "Wireless Keyboard",
      price: "₹ 450 - ₹ 550",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XDQkqUZQO3b9es4FujJIO9xGu-mhtRhuqQ&s",
    },
    {
      id: 3,
      name: "20' inch Monior",
      price: "₹ 3000 - ₹ 4500",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtjaQJ0T2KjwubQyfzO9VoRPmul16RPMa4g&s",
    },
    {
      id: 4,
      name: "Intel i3 Chip",
      price: "₹ 15000 - ₹ 20000",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZ5Tq5p5tPn32GOd8-9XRcFqw95CGPfCWVg&s",
    },
  ];
  const [array, setArray] = useState(() => {
    const modifiedCardProduct = cardProduct.map((product) => ({
      ...product,
      status: true,
    }));
    return modifiedCardProduct;
  });

  const handleAdd = (index) => {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index].status = false; // Update the status of the specific product
      return newArray;
    });
    setValue((prevValue) => prevValue + 1); // Increment cart count
  };
  const handleRemove = (index) => {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index].status = true; // Update the status of the specific product
      return newArray;
    });
    if (value > 0) {
      setValue((prevValue) => prevValue - 1); // Decrement cart count
    }
  };

  return (
    <>
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {array.map((element, index) => {
          return (
            <div key={element.id}>
              <div className="col mb-5">
                <div className="card h-100">
                  {/* <!-- Product image--> */}
                  <img
                    className="card-img-top"
                    src={element.img}
                    alt={element.name}
                  />
                  {/* <!-- Product details--> */}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* <!-- Product name--> */}
                      <h5 className="fw-bolder">{element.name}</h5>
                      {/* <!-- Product price--> */}
                      {element.price}
                    </div>
                  </div>

                  {/* <!-- Product actions--> */}
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    {element.status ? (
                      <div className="text-center">
                        <button
                          className="btn btn-outline-success mt-auto"
                          onClick={() => handleAdd(index)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <button
                          className="btn btn-outline-danger mt-auto"
                          onClick={() => handleRemove(index)}
                        >
                          Remove From Cart
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
