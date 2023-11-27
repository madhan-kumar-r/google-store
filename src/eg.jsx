import React, { useState } from 'react';

const items = [
  { id: 1, name: 'Item 1', category: 'Category A' },
  { id: 2, name: 'Item 2', category: 'Category B' },
  { id: 3, name: 'Item 3', category: 'Category A' },
  { id: 4, name: 'Item 4', category: 'Category C' },
  // Add more items with different categories
];

function FilteredItemList() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  // Function to toggle the selected categories
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Function to filter items based on selected categories
  const filteredItems = items.filter((item) => {
    return selectedCategories.length === 0 || selectedCategories.includes(item.category);
  });

  return (
    <div>
      <h2>Filter Items</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Category A')}
            onChange={() => toggleCategory('Category A')}
          />
          Category A
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Category B')}
            onChange={() => toggleCategory('Category B')}
          />
          Category B
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedCategories.includes('Category C')}
            onChange={() => toggleCategory('Category C')}
          />
          Category C
        </label>
      </div>
      <h2>Filtered Items</h2>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredItemList;
