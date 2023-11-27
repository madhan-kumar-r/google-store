import React, { useState } from "react";
import Data from "../../Components/products/Data";

const IntHome = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Function to filter items based on selected categories
  const filteredItems = Data.filter((item) => {
    return (
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category)
    );
  });

  return (
    <div className="home">
      <div className="textContainer">
        <h1 style={{ color: "rgb(60, 64, 67)" }}>
          Welcome to the
          <br />
          <span style={{ color: "rgb(24, 128, 56)" }}> Google Store</span>
        </h1>
      </div>

      <div style={{ display: "flex" }} className="productContainer">
        {/* leftBar */}
        <div className="leftBar">
          <h3>Product Type</h3>
          <div className="check">
            <div className="item">
              <input
                type="checkbox"
                checked={selectedCategories.includes("Connected Home")}
                onChange={() => toggleCategory("Connected Home")}
              />
              <label>Connected Home</label>
            </div>
            <div className="item">
              <input
                type="checkbox"
                checked={selectedCategories.includes("Phone")}
                onChange={() => toggleCategory("Phone")}
              />
              <label>Phones</label>
            </div>

            <div className="item">
              <input
                type="checkbox"
                checked={selectedCategories.includes("Accessories")}
                onChange={() => toggleCategory("Accessories")}
              />
              <label>Accessories</label>
            </div>
          </div>
          {}
        </div>

        {/* <Products item={item} /> */}

        <div className="products">
          {filteredItems.map((product) => (
            <div key={product.id} className="product">
              <div className="imgCard">
                <img src={product.img} alt="" />
              </div>
              <div className="productName">
                <p>{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntHome;
