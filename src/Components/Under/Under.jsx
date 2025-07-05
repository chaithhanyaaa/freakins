import React from 'react';
import './Under.css';
import popularData from '../../assets/popularData';
import Item from '../Item/Item';

const Under = () => {
  return (
    <div className='popular'>
      <h1>UNDER ₹999</h1>
      <hr />
      <div className='popular-item'>
        {popularData.slice(4, 8).map((item) => (
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
    </div>
  );
};

export default Under;
