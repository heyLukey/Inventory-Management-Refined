import React from "react";

import "./EditModalDate.css";

const EditModalDate = ({ target, value, setValue }) => {
  const inputDate = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="edit-order-date">
        <label className="edit-date-label">
          {target.charAt(0).toUpperCase() + target.slice(1) + ":"}
        </label>
        <div>
          <input
            className="edit-date-input"
            type="date"
            defaultValue={value}
            min={new Date().toISOString().split("T")[0]}
            onChange={inputDate}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditModalDate;
