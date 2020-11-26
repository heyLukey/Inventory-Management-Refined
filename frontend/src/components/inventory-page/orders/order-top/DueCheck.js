// Npm libraries
import React from "react";

// CSS
import "./DueCheck.css";

const DueCheck = ({ deadline, active }) => {
  const renderText = (due) => {
    const dueDate = due.slice(0, 10);
    const dueDateArr = dueDate.split("-");
    const currentDate = new Date().toISOString().slice(0, 10);
    const currentDateArr = currentDate.split("-");

    let returnDiv = <div className="due-no">Empty</div>;

    if (!active) {
      return (returnDiv = <div className="archived">Archived Order</div>);
    }

    // Check if past deadline
    if (dueDate < currentDate) {
      return (returnDiv = (
        <div className="due-yes">
          <i className="fas fa-exclamation-circle"></i>
          Past Due
        </div>
      ));
    }

    // Check Year
    if (dueDateArr[0] > currentDateArr[0]) {
      const yearDifference = dueDateArr[0] - currentDateArr[0];
      if (yearDifference > 1) {
        return (returnDiv = (
          <div className="due-no">{`Due in ${yearDifference} years`}</div>
        ));
      } else {
        return (returnDiv = <div className="due-no">{"Due in 1 year"}</div>);
      }
    }

    // Check Month
    if (dueDateArr[1] > currentDateArr[1]) {
      const monthDifference = dueDateArr[1] - currentDateArr[1];
      if (monthDifference > 1) {
        return (returnDiv = (
          <div className="due-no">{`Due in ${monthDifference} months`}</div>
        ));
      } else {
        return (returnDiv = <div className="due-no">{"Due in 1 month"}</div>);
      }
    }

    // Check Day
    if (dueDateArr[2] >= currentDateArr[2]) {
      const dayDifference = dueDateArr[2] - currentDateArr[2];
      if (dayDifference > 7) {
        return (returnDiv = (
          <div className="due-no">{`Due in ${dayDifference} days`}</div>
        ));
      } else if (dayDifference > 1) {
        return (returnDiv = (
          <div className="due-close">
            <i className="fas fa-exclamation-circle"></i>
            {`Due in ${dayDifference} days`}
          </div>
        ));
      } else if (dayDifference === 1) {
        return (returnDiv = (
          <div className="due-close">
            <i className="fas fa-exclamation-circle"></i>
            {"Due tommorrow"}
          </div>
        ));
      } else {
        return (returnDiv = (
          <div className="due-yes">
            <i className="fas fa-exclamation-circle"></i>
            {"Due today"}
          </div>
        ));
      }
    }
    return returnDiv;
  };

  return <React.Fragment>{renderText(deadline)}</React.Fragment>;
};

export default DueCheck;
