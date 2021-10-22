import React, { useState } from 'react';
import Modal from 'components/modal/modal';
import Leaderboard from 'components/leaderboard/leaderboard';

import './product-card.scss';

const ProductCard = ({ id, title, image, description, supportedPlatforms }) => {
  const [showPortal, setShowPortal] = useState(false);

  return (
    <>
      <article className="product-card" onClick={() => setShowPortal((shouldShowPortal) => !shouldShowPortal)}>
        <img className="product-card__image" src={image} />
        <p className="product-card__title">{title}</p>
      </article>
      {showPortal && (
        <Modal onClose={() => setShowPortal(false)}>
          <h2>{title}</h2>
          <img src={image} />
          <p>{description}</p>
          <ul>
            {supportedPlatforms.map((platform) => (
              <li key={`product-card-${title}-platform-${platform}`}>{platform}</li>
            ))}
          </ul>
          <Leaderboard productId={id} />
        </Modal>
      )}
    </>
  );
};

export default ProductCard;
