import React from 'react';

const ProductCard = ({ title, type, image }) => {
  return (
    <article>
      <div>
        <img src={image} />
        <p>{type}</p>
      </div>
      <p>{title}</p>
    </article>
  );
};

export default ProductCard;
