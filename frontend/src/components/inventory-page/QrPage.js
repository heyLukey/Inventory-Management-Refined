// Npm libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// Util functions
import { getJwt } from "../../utils/getJwt";
import NavBar from "../nav-bar/NavBar";

// CSS
import "./QrPage.css";
import OrderDiv from "./orders/OrderDiv";
import NoOrders from "./orders/NoOrders";

// Get specific order from QR url
const QrPage = () => {
  const [reRender, setReRender] = useState(false);
  const [qrOrder, setQrOrder] = useState(false);
  const [invalidOrder, setInvalidOrder] = useState(false);
  const { orderID } = useParams();

  useEffect(() => {
    const getOrder = () => {
      const jwt = getJwt();
      axios
        .get(`http://localhost:5000/order/${orderID}`, {
          headers: { "x-auth-token": jwt },
        })
        .then((res) => {
          setQrOrder(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          setInvalidOrder(true);
          console.log(`Get QR filter: ${error.response.data.error}`);
        });
    };
    getOrder();
  }, [orderID, reRender]);

  return (
    <React.Fragment>
      <NavBar />
      <div className="page">
        <div className="page-qr">
          {qrOrder ? (
            <OrderDiv
              defaultOpen={true}
              reRender={reRender}
              setReRender={setReRender}
              orderObject={qrOrder}
            />
          ) : invalidOrder ? (
            <NoOrders />
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default QrPage;
