import React from "react";
import axios from "axios";
import { getJwt } from "../../../../../utils/getJwt";

import "./ArchiveButton.css";

const ArchiveButton = ({ reRender, setReRender, orderObject }) => {
  const archiveMe = () => {
    const jwt = getJwt();
    const archiveSubmission = { active: "false" };

    axios
      .patch(
        "http://localhost:5000/order/active/" + orderObject._id,
        archiveSubmission,
        {
          headers: { "x-auth-token": jwt },
        }
      )
      .then((res) => {
        console.log("Order has been archived!");
        setReRender(!reRender);
      })
      .catch((error) => {
        console.log(`Archive Button: ${error.response.data.error}`);
      });
  };

  return (
    <React.Fragment>
      <button onClick={archiveMe}>
        <i className="fas fa-box"></i>
      </button>
    </React.Fragment>
  );
};

export default ArchiveButton;
