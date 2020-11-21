import React from "react";
import axios from "axios";
import { getJwt } from "../../../../../utils/getJwt";

import "./UnarchiveButton.css";

const UnarchiveButton = ({ reRender, setReRender, orderObject }) => {
  const unarchiveMe = () => {
    const jwt = getJwt();
    const archiveSubmission = { active: "true" };

    axios
      .patch(
        "http://localhost:5000/order/active/" + orderObject._id,
        archiveSubmission,
        {
          headers: { "x-auth-token": jwt },
        }
      )
      .then((res) => {
        console.log("Order has been unarchived!");
        setReRender(!reRender);
      })
      .catch((error) => {
        console.log(`Unarchive Button: ${error.response.data.error}`);
      });
  };

  return (
    <React.Fragment>
      <button onClick={unarchiveMe}>
        <i className="fas fa-box-open"></i>
      </button>
    </React.Fragment>
  );
};

export default UnarchiveButton;
