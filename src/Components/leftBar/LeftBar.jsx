import { useState } from "react";
import "./LeftBar.scss";

const LeftBar = ({ menuItems }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="leftBar">
      <h3>Product Type</h3>
      <div className="check">
        {menuItems.map((cat, index) => (
          <div className="item" key={index}>
            <input
              type="checkbox"
              checked={selectedCategories.includes({ cat })}
              onChange={() => toggleCategory({ cat })}
            />
            <label>{cat}</label>
          </div>
        ))}
      </div>
      <button>Apply</button>
    </div>
  );
};

export default LeftBar;
