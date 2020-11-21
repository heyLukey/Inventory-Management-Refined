import React, { useState } from "react";
import TrashModal from "./TrashModal";

import "./TrashButton.css";

const TrashButton = ({ reRender, setReRender, orderObject }) => {
  const [trashOpen, setTrashOpen] = useState(false);

  const openButton = () => {
    setTrashOpen(true);
  };

  return (
    <React.Fragment>
      <TrashModal
        reRender={reRender}
        setReRender={setReRender}
        trashOpen={trashOpen}
        setTrashOpen={setTrashOpen}
        orderObject={orderObject}
      />
      <button onClick={openButton}>
        <i className="fas fa-trash-alt"></i>
      </button>
    </React.Fragment>
  );
};

export default TrashButton;
