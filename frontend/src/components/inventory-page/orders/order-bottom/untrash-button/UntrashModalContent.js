import React from "react";
import { getJwt } from "../../../../../utils/getJwt";
import axios from "axios";

import "./UntrashModalContent.css";

const UntrashModalContent = ({
  reRender,
  setReRender,
  modalClose,
  orderObject,
}) => {
  const untrashMe = () => {
    const jwt = getJwt();
    const recycledSubmission = { recycled: "false" };

    axios
      .patch(
        "http://localhost:5000/order/recycled/" + orderObject._id,
        recycledSubmission,
        {
          headers: { "x-auth-token": jwt },
        }
      )
      .then((res) => {
        console.log("Order has been restored!");
        setReRender(!reRender);
        modalClose();
      })
      .catch((error) => {
        console.log(`Untrash Modal: ${error.response.data.error}`);
      });
  };

  return (
    <React.Fragment>
      <div className="untrash-modal-content">
        <h1>Are you sure you want to restore '{orderObject.title}'?</h1>
        {/* <p>
          (Note: orders are not permenantly deleted, so the find this again
          after deletion just filter by recycled!)
        </p> */}
        <button onClick={untrashMe} className="untrash-modal-yes">
          Yes
        </button>
        <button onClick={modalClose} className="untrash-modal-no">
          No
        </button>
      </div>
    </React.Fragment>
  );
};

export default UntrashModalContent;
