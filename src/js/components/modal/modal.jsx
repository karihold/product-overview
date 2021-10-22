import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';

const portalTarget = document.body;
const modalOverlay = document.createElement('div');
modalOverlay.className = 'modal-overlay';

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    onModalMount();
    return () => {
      onModalDismount();
    };
  });

  function onModalMount() {
    portalTarget.appendChild(modalOverlay);
    portalTarget.addEventListener('keydown', onEscape);
    portalTarget.classList.add('no-scroll');
    modalOverlay.addEventListener('click', closeModal);
  }

  function onModalDismount() {
    portalTarget.removeChild(modalOverlay);
    +portalTarget.removeEventListener('keydown', onEscape);
    portalTarget.classList.remove('no-scroll');
    modalOverlay.removeEventListener('click', closeModal);
  }

  function closeModal(event) {
    const clickedElement = event.target;
    const overlay = event.currentTarget;
    if (clickedElement === overlay) onClose();
  }

  function onEscape(event) {
    if (event.key === 'Escape') onClose();
  }

  return createPortal(
    <article className="modal">
      <button className="modal__close-button" onClick={onClose}>
        X
      </button>
      <div className="modal__children-wrapper">{children}</div>
    </article>,
    modalOverlay
  );
};

export default Modal;
