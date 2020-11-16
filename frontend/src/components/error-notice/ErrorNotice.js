// Npm libraries
import React from "react";

// CSS
import "./ErrorNotice.css";

// Component that renders if error is caught
const ErrorNotice = ({ errorMsg }) => {
  return (
    <React.Fragment>
      <div className="error-notice">
        <div className="error-text">{errorMsg}</div>
        <i className="fas fa-exclamation-circle"></i>
      </div>
    </React.Fragment>
  );
};

export default ErrorNotice;
