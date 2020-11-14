import React from "react";
import "./error-notice.css";

const ErrorNotice = ({ errorMsg }) => {
  return (
    <React.Fragment>
      <div className="error-notice">
        <div className="error-text">{errorMsg}</div>
        <i class="fas fa-exclamation-circle"></i>
      </div>
    </React.Fragment>
  );
};

export default ErrorNotice;
