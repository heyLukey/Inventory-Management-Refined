import React, { useState } from "react";
import UntrashModal from "./UntrashModal";

import "./UntrashButton.css";

const UntrashButton = ({ reRender, setReRender, orderObject }) => {
  const [untrashOpen, setUntrashOpen] = useState(false);

  const openButton = () => {
    setUntrashOpen(true);
  };

  return (
    <React.Fragment>
      <UntrashModal
        reRender={reRender}
        setReRender={setReRender}
        untrashOpen={untrashOpen}
        setUntrashOpen={setUntrashOpen}
        orderObject={orderObject}
      />
      <button onClick={openButton}>
        <i className="fas fa-trash-restore-alt"></i>
      </button>
    </React.Fragment>
  );
};

export default UntrashButton;
