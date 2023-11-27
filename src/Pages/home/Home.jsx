import "./Home.scss";
import Products from "../../Components/products/Products";
import LeftBar from "../../Components/leftBar/LeftBar";
import { useState } from "react";
import Data from "../../Components/products/Data";

const Home = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  return (
    <div className="home">
      <div className="textContainer">
        <h1 style={{ color: "rgb(60, 64, 67)" }}>
          Welcome to the
          <br />
          <span style={{ color: "rgb(24, 128, 56)" }}> Google Store</span>
        </h1>
        <div style={{ display: "flex" }} className="productContainer">
          <LeftBar menuItems={menuItems} />
          <Products item={item} />
        </div>
      </div>
    </div>
  );
};

export default Home;
