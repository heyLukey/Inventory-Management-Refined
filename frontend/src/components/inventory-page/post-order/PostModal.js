import React from "react";
import Modal from "react-modal";
import PostModalContent from "./PostModalContent";

import "./PostModal.css";

Modal.setAppElement("#root");
const PostModal = ({ reRender, setReRender, postOpen, setPostOpen }) => {
  const modalClose = () => {
    setPostOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        isOpen={postOpen}
        onRequestClose={modalClose}
        className="post-modal-background"
        overlayClassName="post-modal-overlay"
      >
        <div className="post-modal-top">
          <button onClick={modalClose}>
            <i className="far fa-times-circle"></i>
          </button>
          <h3>Creating New Order</h3>
        </div>

        <PostModalContent
          reRender={reRender}
          setReRender={setReRender}
          modalClose={modalClose}
        />
      </Modal>
    </React.Fragment>
  );
};

export default PostModal;
