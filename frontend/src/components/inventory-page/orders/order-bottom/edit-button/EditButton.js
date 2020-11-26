import React, { useState } from "react";
import EditModal from "./EditModal";

import "./EditButton.css";

const EditButton = ({ reRender, setReRender, orderObject }) => {
  const [editOpen, setEditOpen] = useState(false);

  const openButton = () => {
    setEditOpen(true);
  };

  return (
    <React.Fragment>
      <EditModal
        reRender={reRender}
        setReRender={setReRender}
        editOpen={editOpen}
        setEditOpen={setEditOpen}
        orderObject={orderObject}
      />
      <button onClick={openButton}>
        <i className="fas fa-edit"></i>
      </button>
    </React.Fragment>
  );
};

export default EditButton;
