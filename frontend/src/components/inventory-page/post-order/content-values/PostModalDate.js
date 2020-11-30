import React from "react";

import "./PostModalDate.css";

const PostModalDate = ({ target, value, setValue }) => {
  const inputDate = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="post-order-date">
        <label className="post-date-label">
          {target.charAt(0).toUpperCase() + target.slice(1) + ":"}
        </label>
        <div>
          <input
            className="post-date-input"
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

export default PostModalDate;
