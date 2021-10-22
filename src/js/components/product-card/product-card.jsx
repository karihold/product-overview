import React, { useState } from 'react';
import ProductModal from 'components/product-modal/product-modal';

import './product-card.scss';

const ProductCard = ({ id, title, image, description, supportedPlatforms }) => {
  const [showProductModal, setShowPortal] = useState(false);

  return (
    <>
      <article className="product-card" onClick={() => setShowPortal((shouldShowPortal) => !shouldShowPortal)}>
        <img className="product-card__image" src={image} />
        <p className="product-card__title">{title}</p>
      </article>

      <ProductModal
        title={title}
        image={image}
        description={description}
        supportedPlatforms={supportedPlatforms}
        productId={id}
        onClose={() => setShowPortal(false)}
        showModal={showProductModal}
      />
    </>
  );
};

export default ProductCard;
