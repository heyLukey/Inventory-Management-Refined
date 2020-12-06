// Npm Libraries
import React, { useState } from "react";
import axios from "axios";
import TextareaAutosize from "react-textarea-autosize";

// Components
import ErrorNotice from "../../error-notice/ErrorNotice";
import PostModalText from "./content-values/PostModalText";
import PostModalDate from "./content-values/PostModalDate";
import PostModalTodo from "./content-values/PostModalTodo";

// Util functions
import { getJwt } from "../../../utils/getJwt";

// CSS
import "./PostModalContent.css";

const PostModalContent = ({ reRender, setReRender, modalClose }) => {
  // State for error text
  const [errorMsg, setErrorMsg] = useState(undefined);

  // States for 'text' based inputs
  const [title, setTitle] = useState(undefined);
  const [customer, setCustomer] = useState(undefined);
  const [description, setDescription] = useState(undefined);
  const [quantity, setQuantity] = useState(undefined);
  const [price, setPrice] = useState(undefined);
  const [notes, setNotes] = useState(undefined);
  const [deadline, setDeadline] = useState(undefined);

  // States for todo
  const [polishing, setPolishing] = useState(undefined);
  const [sizing, setSizing] = useState(undefined);
  const [lazer, setLazer] = useState(undefined);
  const [engraving, setEngraving] = useState(undefined);
  const [plating, setPlating] = useState(undefined);
  const [rhodium, setRhodium] = useState(undefined);
  const [cleaning, setCleaning] = useState(undefined);

  // On title input
  const inputTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  // On submit
  const postMe = () => {
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

    const postSubmission = Object.assign(tmp);

    const jwt = getJwt();
    axios
      .post(`http://localhost:5000/order/create`, postSubmission, {
        headers: { "x-auth-token": jwt },
      })
      .then((res) => {
        console.log(`Order ${res.data._id} has been created!`);
        setReRender(!reRender);
        modalClose();
      })
      .catch((error) => {
        console.log(`Post Order: ${error.response.data.error}`);
        error.response.data.error && setErrorMsg(error.response.data.error);
        return;
      });
  };

  return (
    <React.Fragment>
      <div className="post-modal-content">
        <div className="post-error-div">
          {errorMsg && <ErrorNotice errorMsg={errorMsg} />}
        </div>
        <div className="post-order-div">
          <div className="post-title">
            <TextareaAutosize
              className="post-title-input"
              type="text"
              placeholder="title"
              minRows={1}
              maxRows={1}
              onChange={inputTitle}
            />
          </div>
          <div className="post-order-content">
            <PostModalText
              target="customer"
              value={customer}
              setValue={setCustomer}
            />
            <PostModalText
              target="description"
              value={description}
              setValue={setDescription}
            />
            <PostModalText
              target="quantity"
              value={quantity}
              setValue={setQuantity}
            />
            <PostModalText target="price" value={price} setValue={setPrice} />
            <div className="post-order-content-todo">
              <label className="todo-instructions">
                Select applicable tasks:
              </label>
              <PostModalTodo
                target="polishing"
                value={polishing}
                setValue={setPolishing}
              />
              <PostModalTodo
                target="sizing"
                value={sizing}
                setValue={setSizing}
              />
              <PostModalTodo target="lazer" value={lazer} setValue={setLazer} />
              <PostModalTodo
                target="engraving"
                value={engraving}
                setValue={setEngraving}
              />
              <PostModalTodo
                target="plating"
                value={plating}
                setValue={setPlating}
              />
              <PostModalTodo
                target="rhodium"
                value={rhodium}
                setValue={setRhodium}
              />
              <PostModalTodo
                target="cleaning"
                value={cleaning}
                setValue={setCleaning}
              />
            </div>
            <PostModalText target="notes" value={notes} setValue={setNotes} />
            <PostModalDate
              target="deadline"
              value={deadline}
              setValue={setDeadline}
              minDate={new Date().toISOString()}
            />
          </div>
        </div>
        <div className="post-order-button">
          <button onClick={postMe} className="submit-post">
            Submit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PostModalContent;
