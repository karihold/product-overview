import React from 'react';
import ProductCategory from 'components/product-category/product-category';
import productData from 'data/productcategories.json';
import './frontpage.scss';

const Frontpage = () => {
  return (
    <>
      {productData.map(({ id, title, products }) => (
        <ProductCategory key={`product-category-${id}`} category={title} products={products} />
      ))}
    </>
  );
};

export default Frontpage;
