import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import popularData from '../assets/popularData';
import './Product.css';
import { CartContext } from '../Context/CartContext';

const Product = () => {
  const { id } = useParams();
  const product = popularData.find(item => item.id === Number(id));
  const { addToCart } = useContext(CartContext);

  const [previewImg, setPreviewImg] = useState(product?.images?.[0]);

  if (!product) {
    return <div style={{ padding: '100px' }}>Product not found.</div>;
  }

  return (
    <div className="product-page">
      <div className="product-gallery">
        <img src={previewImg} alt="Preview" className="main-image" />
        <div className="thumbnail-row">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`thumbnail ${previewImg === img ? 'active' : ''}`}
              onClick={() => setPreviewImg(img)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p>{product.description}</p>
        <div className="product-price">
          <span>{product.new_price}</span>
          <s>{product.old_price}</s>
        </div>
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
