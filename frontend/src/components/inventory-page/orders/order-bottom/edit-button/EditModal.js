import React from "react";
import Modal from "react-modal";
import EditModalContent from "./EditModalContent";

import "./EditModal.css";

Modal.setAppElement("#root");
const EditModal = ({
  reRender,
  setReRender,
  editOpen,
  setEditOpen,
  orderObject,
}) => {
  const modalClose = () => {
    setEditOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={editOpen}
        onRequestClose={modalClose}
        className="edit-modal-background"
        overlayClassName="edit-modal-overlay"
      >
        <div className="edit-modal-top">
          <button onClick={modalClose}>
            <i className="far fa-times-circle"></i>
          </button>
        </div>

        <EditModalContent
          reRender={reRender}
          setReRender={setReRender}
          modalClose={modalClose}
          orderObject={orderObject}
        />
      </Modal>
    </React.Fragment>
  );
};

export default EditModal;
