import React from 'react';
import './Fame.css';

import f1 from '../../assets/fame/f1.jpg';
import f2 from '../../assets/fame/f2.jpg';
import f3 from '../../assets/fame/f3.jpg';
import f4 from '../../assets/fame/f4.jpg';
import f5 from '../../assets/fame/f5.jpg';
import f6 from '../../assets/fame/f6.jpg';
import f7 from '../../assets/fame/f7.jpg';


const Fame = () => {
  const fameImages = [f1, f2, f3, f4, f5, f6];

  return (
    <div className="fame">
      <h2>JOIN OUR 512K+ FAM!</h2>
      <div className="fame-grid">
        {fameImages.map((img, i) => (
          <img key={i} src={img} alt={`fame-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default Fame;
