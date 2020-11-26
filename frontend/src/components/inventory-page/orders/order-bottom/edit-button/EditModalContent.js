import React, { useState } from "react";
import EditModalText from "./EditModalText";
import EditModalTodo from "./EditModalTodo";
import OrderText from "../../order-content/OrderText";
import EditModalDate from "./EditModalDate";
import TextareaAutosize from "react-textarea-autosize";
import ErrorNotice from "../../../../error-notice/ErrorNotice";

import "./EditModalContent.css";

const EditModalContent = ({
  reRender,
  setReRender,
  modalClose,
  orderObject,
}) => {
  // States for 'text' based inputs
  const [customer, setCustomer] = useState(orderObject.customer);
  const [description, setDescription] = useState(orderObject.description);
  const [quantity, setQuantity] = useState(orderObject.quantity);
  const [price, setPrice] = useState(orderObject.price);
  const [notes, setNotes] = useState(orderObject.notes);
  const [deadline, setDeadline] = useState(orderObject.deadline.slice(0, 10));

  // States for todo
  const [polishing, setPolishing] = useState(orderObject.todo.polishing);
  const [sizing, setSizing] = useState(orderObject.todo.sizing);
  const [lazer, setLazer] = useState(orderObject.todo.lazer);
  const [engraving, setEngraving] = useState(orderObject.todo.engraving);
  const [plating, setPlating] = useState(orderObject.todo.plating);
  const [rhodium, setRhodium] = useState(orderObject.todo.rhodium);
  const [cleaning, setCleaning] = useState(orderObject.todo.cleaning);

  // Functions
  const editMe = () => {
    modalClose();
  };

  return (
    <React.Fragment>
      <div className="edit-modal-content">
        <div className="error-div">
          {false ? <ErrorNotice errorMsg="hello" /> : null}
        </div>
        <div className="edit-order-div">
          <div className="edit-title">
            <TextareaAutosize
              className="edit-title-input"
              type="text"
              defaultValue={orderObject.title}
              minRows={1}
            />
          </div>
          <div className="edit-order-content">
            <EditModalText
              target="customer"
              value={customer}
              setValue={setCustomer}
            />
            <EditModalText
              target="description"
              value={description}
              setValue={setDescription}
            />
            <EditModalText
              target="quantity"
              value={quantity}
              setValue={setQuantity}
            />
            <EditModalText target="price" value={price} setValue={setPrice} />
            <div className="edit-order-content-todo">
              <EditModalTodo
                target="polishing"
                value={polishing}
                setValue={setPolishing}
              />
              <EditModalTodo
                target="sizing"
                value={sizing}
                setValue={setSizing}
              />
              <EditModalTodo target="lazer" value={lazer} setValue={setLazer} />
              <EditModalTodo
                target="engraving"
                value={engraving}
                setValue={setEngraving}
              />
              <EditModalTodo
                target="plating"
                value={plating}
                setValue={setPlating}
              />
              <EditModalTodo
                target="rhodium"
                value={rhodium}
                setValue={setRhodium}
              />
              <EditModalTodo
                target="cleaning"
                value={cleaning}
                setValue={setCleaning}
              />
            </div>
            <EditModalText target="notes" value={notes} setValue={setNotes} />
            <EditModalDate
              target="deadline"
              value={deadline}
              setValue={setDeadline}
              minDate={new Date().toISOString()}
            />
            <OrderText orderObject={orderObject} textTarget="created" />
          </div>
        </div>
        <div className="edit-order-button">
          <button onClick={editMe} className="submit-edit">
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditModalContent;
