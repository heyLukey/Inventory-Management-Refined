// Npm Libraries
import React, { useState } from "react";
import axios from "axios";
import TextareaAutosize from "react-textarea-autosize";

// Components
import EditModalText from "./content-values/EditModalText";
import EditModalTodo from "./content-values/EditModalTodo";
import EditModalDate from "./content-values/EditModalDate";
import OrderText from "../../order-content/OrderText";
import ErrorNotice from "../../../../error-notice/ErrorNotice";

// Util functions
import { getJwt } from "../../../../../utils/getJwt";

// CSS
import "./EditModalContent.css";

const EditModalContent = ({
  reRender,
  setReRender,
  modalClose,
  orderObject,
}) => {
  // State for error text
  const [errorMsg, setErrorMsg] = useState(undefined);

  // States for 'text' based inputs
  const [title, setTitle] = useState(orderObject.title);
  const [customer, setCustomer] = useState(orderObject.customer);
  const [description, setDescription] = useState(orderObject.description);
  const [quantity, setQuantity] = useState(orderObject.quantity);
  const [price, setPrice] = useState(orderObject.price);
  const [notes, setNotes] = useState(orderObject.notes);
  const [deadline, setDeadline] = useState(orderObject.deadline.slice(0, 10));

  // string to bool
  const s2b = (string) => {
    if (!string) {
      return undefined;
    } else {
      return string === "true";
    }
  };

  // States for todo
  const [polishing, setPolishing] = useState(s2b(orderObject.todo.polishing));
  const [sizing, setSizing] = useState(s2b(orderObject.todo.sizing));
  const [lazer, setLazer] = useState(s2b(orderObject.todo.lazer));
  const [engraving, setEngraving] = useState(s2b(orderObject.todo.engraving));
  const [plating, setPlating] = useState(s2b(orderObject.todo.plating));
  const [rhodium, setRhodium] = useState(s2b(orderObject.todo.rhodium));
  const [cleaning, setCleaning] = useState(s2b(orderObject.todo.cleaning));

  // On title input
  const inputTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  // On submit
  const editMe = () => {
    let tmp = {
      title: title,
      customer: customer,
      description: description,
      quantity: quantity,
      price: price,
      todo: {
        polishing: polishing,
        sizing: sizing,
        lazer: lazer,
        engraving: engraving,
        plating: plating,
        rhodium: rhodium,
        cleaning: cleaning,
      },
      notes: notes,
      deadline: deadline,
    };

    for (const task in tmp.todo) {
      if (tmp.todo[task] === undefined) {
        delete tmp.todo[task];
      } else {
        tmp.todo[task] = tmp.todo[task].toString();
      }
    }

    const patchSubmission = Object.assign(tmp);

    const jwt = getJwt();
    axios
      .patch(
        `http://localhost:5000/order/edit/${orderObject._id}`,
        patchSubmission,
        {
          headers: { "x-auth-token": jwt },
        }
      )
      .then((res) => {
        console.log(`Order ${orderObject._id} has been patched!`);
        setReRender(!reRender);
        modalClose();
      })
      .catch((error) => {
        console.log(`Patch Order: ${error.response.data.error}`);
        error.response.data.error && setErrorMsg(error.response.data.error);
        return;
      });
  };

  return (
    <React.Fragment>
      <div className="edit-modal-content">
        <div className="patch-error-div">
          {errorMsg && <ErrorNotice errorMsg={errorMsg} />}
        </div>
        <div className="edit-order-div">
          <div className="edit-title">
            <TextareaAutosize
              className="edit-title-input"
              type="text"
              defaultValue={title}
              minRows={1}
              maxRows={1}
              onChange={inputTitle}
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
