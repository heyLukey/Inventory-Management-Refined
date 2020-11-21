import React from "react";
import Modal from "react-modal";
import UntrashModalContent from "./UntrashModalContent";

import "./UntrashModal.css";

Modal.setAppElement("#root");
const UntrashModal = ({
  reRender,
  setReRender,
  untrashOpen,
  setUntrashOpen,
  orderObject,
}) => {
  const modalClose = () => {
    setUntrashOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={untrashOpen}
        onRequestClose={modalClose}
        className="untrash-modal-background"
        overlayClassName="untrash-modal-overlay"
      >
        <div className="untrash-modal-top">
          <button onClick={modalClose}>
            <i className="far fa-times-circle"></i>
          </button>
        </div>

        <UntrashModalContent
          reRender={reRender}
          setReRender={setReRender}
          modalClose={modalClose}
          orderObject={orderObject}
        />
      </Modal>
    </React.Fragment>
  );
};

export default UntrashModal;
