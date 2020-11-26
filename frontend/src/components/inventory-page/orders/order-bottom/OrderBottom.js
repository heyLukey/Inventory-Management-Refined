import React from "react";
import TrashButton from "./trash-button/TrashButton";
import "./OrderBottom.css";
import UntrashButton from "./untrash-button/UntrashButton";
import ArchiveButton from "./archive-button/ArchiveButton";
import UnarchiveButton from "./archive-button/UnarchiveButton";
import QrButton from "./qr-button/QrButton";
import EditButton from "./edit-button/EditButton";

const OrderBottom = ({ reRender, setReRender, orderObject }) => {
  return (
    <React.Fragment>
      <div className="order-bottom">
        <div className="qr">
          <QrButton orderObject={orderObject} />
        </div>
        <div className="archive">
          {orderObject.active ? (
            <ArchiveButton
              reRender={reRender}
              setReRender={setReRender}
              orderObject={orderObject}
            />
          ) : (
            <UnarchiveButton
              reRender={reRender}
              setReRender={setReRender}
              orderObject={orderObject}
            />
          )}
        </div>
        <div className="edit">
          <EditButton
            reRender={reRender}
            setReRender={setReRender}
            orderObject={orderObject}
          />
        </div>
        <div className="trash">
          {orderObject.recycled ? (
            <UntrashButton
              reRender={reRender}
              setReRender={setReRender}
              orderObject={orderObject}
            />
          ) : (
            <TrashButton
              reRender={reRender}
              setReRender={setReRender}
              orderObject={orderObject}
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderBottom;
