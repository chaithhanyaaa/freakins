import React from 'react';
import './Popular.css';
import popularData from '../../assets/popularData';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>TRENDING</h1>
      <hr />
      <div className='popular-item'>
        {popularData.slice(0, 4).map((_, i) => (
          <Item
            key={popularData[i].id}
            id={popularData[i].id}
            name={popularData[i].name}
            img={popularData[i].images[0]}
            new_price={popularData[i].new_price}
            old_price={popularData[i].old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
