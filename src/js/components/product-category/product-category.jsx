import React from 'react';
import ProductCard from 'components/product-card/product-card';

const ProductCategory = ({ category, products }) => {
  return (
    <section>
      <h2>{category}</h2>
      {products.map(({ title, image }) => (
        <ProductCard title={title} type={category} image={image} />
      ))}
    </section>
  );
};

export default ProductCategory;
