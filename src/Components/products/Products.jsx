import { useState } from "react";
import "./Products.scss";


const Products = ({item}) => {
  return (
    <div className="products">
      {item.map((product) => (
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
  );
};

export default Products;
