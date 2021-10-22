import React from 'react';
import Modal from 'components/modal/modal';
import Leaderboard from 'components/leaderboard/leaderboard';
import './product-modal.scss';

const ProductModal = ({ showModal, title, description, supportedPlatforms, productId, onClose }) => {
  if (!showModal) return <></>;

  return (
    <Modal onClose={onClose}>
      <section className="product-modal">
        <h2 className="product-modal__title">{title}</h2>
        <p className="product-modal__description">{description}</p>
        <section className="product-modal__supported-section">
          <h3 className="product-modal__supported-title">Supported Platforms</h3>
          <ul className="product-modal__supported-list">
            {supportedPlatforms.map((platform) => (
              <li className="product-modal__supported-list-item" key={`product-card-${title}-platform-${platform}`}>
                {platform}
              </li>
            ))}
          </ul>
        </section>
        <Leaderboard productId={productId} />
      </section>
    </Modal>
  );
};

export default ProductModal;
