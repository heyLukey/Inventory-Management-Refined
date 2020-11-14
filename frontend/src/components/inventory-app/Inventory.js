import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/User.context";

const Inventory = () => {
  // Get userData from context
  const { userData } = useContext(UserContext);

  // Get history
  const history = useHistory();

  // Push to login page if not logged in
  useEffect(() => {
    if (!userData.user) {
      history.push("/login");
    }
  });

  return (
    <React.Fragment>
      <div>Inventory</div>
    </React.Fragment>
  );
};

export default Inventory;
