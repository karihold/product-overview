import React from 'react';
import ProductCard from 'components/product-card/product-card';
import './product-category.scss';

const ProductCategory = ({ category, products }) => {
  return (
    <section className="product-category">
      <h2 className="product-category__title">{category}</h2>
      <div className="product-category__cards-grid">
        {products.map(({ id, title, image, description, supported_platforms }) => (
          <ProductCard
            key={`product-card-${id}`}
            id={id}
            title={title}
            type={category}
            image={image}
            description={description}
            supportedPlatforms={supported_platforms}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
