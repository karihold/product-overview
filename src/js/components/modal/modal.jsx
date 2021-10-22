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
    portalTarget.addEventListener('click', onClose);
    portalTarget.addEventListener('keydown', onEscape);
  }

  function onModalDismount() {
    portalTarget.removeChild(modalOverlay);
    portalTarget.removeEventListener('click', onClose);
    portalTarget.removeEventListener('keydown', onEscape);
  }

  function onEscape(event) {
    if (event.key === 'Escape') onClose();
  }

  return createPortal(<article className="modal">{children}</article>, modalOverlay);
};

export default Modal;
