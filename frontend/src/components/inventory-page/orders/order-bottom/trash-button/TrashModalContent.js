import React from "react";
import { getJwt } from "../../../../../utils/getJwt";
import axios from "axios";

import "./TrashModalContent.css";

const TrashModalContent = ({
  reRender,
  setReRender,
  modalClose,
  orderObject,
}) => {
  const trashMe = () => {
    const jwt = getJwt();
    const recycledSubmission = { recycled: "true" };

    axios
      .patch(
        "http://localhost:5000/order/recycled/" + orderObject._id,
        recycledSubmission,
        {
          headers: { "x-auth-token": jwt },
        }
      )
      .then((res) => {
        console.log("Order has been recycled!");
        setReRender(!reRender);
        modalClose();
      })
      .catch((error) => {
        console.log(`Trash Modal: ${error.response.data.error}`);
      });
  };

  return (
    <React.Fragment>
      <div className="trash-modal-content">
        <h1>Are you sure you want to delete '{orderObject.title}'?</h1>
        <p>
          (Note: orders are not permenantly deleted, so the find this again
          after deletion just filter by recycled!)
        </p>
        <button onClick={trashMe} className="trash-modal-yes">
          Yes
        </button>
        <button onClick={modalClose} className="trash-modal-no">
          No
        </button>
      </div>
    </React.Fragment>
  );
};

export default TrashModalContent;
