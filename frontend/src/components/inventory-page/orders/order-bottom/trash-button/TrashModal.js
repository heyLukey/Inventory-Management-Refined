import React from "react";
import Modal from "react-modal";
import TrashModalContent from "./TrashModalContent";

import "./TrashModal.css";

Modal.setAppElement("#root");
const TrashModal = ({
  reRender,
  setReRender,
  trashOpen,
  setTrashOpen,
  orderObject,
}) => {
  const modalClose = () => {
    setTrashOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={trashOpen}
        onRequestClose={modalClose}
        className="trash-modal-background"
        overlayClassName="trash-modal-overlay"
      >
        <div className="trash-modal-top">
          <button onClick={modalClose}>
            <i className="far fa-times-circle"></i>
          </button>
        </div>

        <TrashModalContent
          reRender={reRender}
          setReRender={setReRender}
          modalClose={modalClose}
          orderObject={orderObject}
        />
      </Modal>
    </React.Fragment>
  );
};

export default TrashModal;
