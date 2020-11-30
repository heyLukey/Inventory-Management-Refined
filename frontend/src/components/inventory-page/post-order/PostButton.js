import React, { useState } from "react";
import PostModal from "./PostModal";

import "./PostButton.css";

const PostButton = ({ reRender, setReRender }) => {
  const [postOpen, setPostOpen] = useState(false);

  const openButton = () => {
    setPostOpen(true);
  };

  return (
    <React.Fragment>
      <PostModal
        reRender={reRender}
        setReRender={setReRender}
        postOpen={postOpen}
        setPostOpen={setPostOpen}
      />

      <button className="post-button" onClick={openButton}>
        <i className="fas fa-plus"></i>
      </button>
    </React.Fragment>
  );
};

export default PostButton;
