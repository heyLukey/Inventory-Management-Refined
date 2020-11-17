// Npm libraries
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import NavBar from "../nav-bar/NavBar";
import OrderList from "./orders/OrderList";

// CSS
import "./InventoryPage.css";
import { getJwt } from "../../utils/getJwt";

// Display inventory on this page [protected]
const InventoryPage = () => {
  const [reRender, setReRender] = useState(false);
  const [displayOrders, setDisplayOrders] = useState([]);
  const [query, setQuery] = useState({
    active: "true",
    recycled: "false",
    todo: {
      polishing: "false",
      sizing: "false",
      lazer: "false",
      engraving: "false",
      plating: "false",
      rhodium: "false",
      cleaning: "false",
    },
  });

  useEffect(() => {
    const chooseOrders = () => {
      const jwt = getJwt();
      axios
        .post("http://localhost:5000/order/filter", query, {
          headers: { "x-auth-token": jwt },
        })
        .then((res) => {
          setDisplayOrders(res.data);
        })
        .catch((error) => {
          console.log(`Post filter: ${error.response.data.error}`);
        });
    };
    chooseOrders();
  }, [query, reRender]);

  return (
    <React.Fragment>
      <NavBar />
      <div className="page">
        <div className="page-inventory">
          <OrderList
            displayOrders={displayOrders}
            reRender={reRender}
            setReRender={setReRender}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InventoryPage;
