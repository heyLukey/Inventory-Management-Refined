// Npm libraries
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import NavBar from "../nav-bar/NavBar";
import OrderList from "./orders/OrderList";
import InventoryBar from "./inventory-bar/InventoryBar";
import InventoryFilter from "./inventory-filter/InventoryFilter";

// Util functions
import { getJwt } from "../../utils/getJwt";

// CSS
import "./InventoryPage.css";

// Display inventory on this page [protected]
const InventoryPage = () => {
  // Render states
  const [reRender, setReRender] = useState(false);
  const [displayOrders, setDisplayOrders] = useState(false);

  // Sort states
  const [search, setSearch] = useState("");
  const [isAsc, setIsAsc] = useState(true);

  // Filter states
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

  // Fetch queried orders from database
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

  // Sort for descending date
  const compareDateDesc = (a, b) => {
    if (a.deadline < b.deadline) return 1;
    if (a.deadline > b.deadline) return -1;
    if (a.deadline === b.deadline) {
      if (a.created < b.created) return 1;
      if (a.created > b.created) return -1;
    }
    return 0;
  };

  // Sort for ascending date
  const compareDateAsc = (a, b) => {
    if (a.deadline > b.deadline) return 1;
    if (a.deadline < b.deadline) return -1;
    if (a.deadline === b.deadline) {
      if (a.created > b.created) return 1;
      if (a.created < b.created) return -1;
    }
    return 0;
  };

  // Sort (filter) by search and then by date
  const searchSort = (arr) => {
    if (search === "") {
      return isAsc ? arr.sort(compareDateAsc) : arr.sort(compareDateDesc);
    } else {
      const arrFiltered = arr.filter(function (order) {
        return order.title.toLowerCase().includes(search.toLocaleLowerCase());
      });
      return isAsc
        ? arrFiltered.sort(compareDateAsc)
        : arrFiltered.sort(compareDateDesc);
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="page">
        <div className="page-inventory">
          <InventoryBar
            query={query}
            setQuery={setQuery}
            isAsc={isAsc}
            setIsAsc={setIsAsc}
            search={search}
            setSearch={setSearch}
          />
          {displayOrders ? (
            <OrderList
              displayOrders={searchSort(displayOrders)}
              reRender={reRender}
              setReRender={setReRender}
            />
          ) : null}
          <InventoryFilter query={query} setQuery={setQuery} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InventoryPage;
