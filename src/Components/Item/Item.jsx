import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`} className="item-link">
      <div className='item'>
        <div className='item-img-wrapper'>
          <img src={props.img} alt={props.name} />
          <div className='quick-view'>QUICK VIEW</div>
        </div>
        <p>{props.name}</p>
        <div className='item-prices'>
          <div className="item-price-new">{props.new_price}</div>
          <div className="item-price-old">{props.old_price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
