import React from 'react';
import popularData from '../assets/popularData';
import Item from '../Components/Item/Item';
import './ShopCategory.css'; // optional CSS file

const ShopCategory = ({ category }) => {
  const filteredItems = popularData.filter(item => item.category.toLowerCase() === category.toLowerCase());

  return (
    <div className="shop-category">
     
      {filteredItems.length === 0 ? (
        <p>No items found in this category.</p>
      ) : (
        <div className="category-items">
          {filteredItems.map(item => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.images[0]}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
