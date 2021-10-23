import React, { useState } from 'react';
import ProductModal from 'components/product-modal/product-modal';

import './product-card.scss';

const ProductCard = ({ id, title, image, description, supportedPlatforms }) => {
  const [showProductModal, setShowPortal] = useState(false);

  function onEnterKey(event) {
    if (event.key === 'Enter') setShowPortal(true);
  }

  return (
    <>
      <article className="product-card" onClick={() => setShowPortal(true)} onKeyDown={onEnterKey} tabIndex={0}>
        <img className="product-card__image" src={image} />
        <h2 className="product-card__title">{title}</h2>
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
