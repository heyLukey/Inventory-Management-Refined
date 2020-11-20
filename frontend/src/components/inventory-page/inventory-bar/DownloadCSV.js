import React from "react";
import axios from "axios";
import FileDownload from "js-file-download";

import { getJwt } from "../../../utils/getJwt";

import "./DownloadCSV.css";

const DownloadCSV = () => {
  const download = () => {
    const jwt = getJwt();

    axios
      .get("http://localhost:5000/csv/download", {
        headers: { "x-auth-token": jwt },
      })
      .then((res) => {
        console.log("File Downloaded!");
        FileDownload(res.data, "report.csv");
      })
      .catch((error) => {
        console.log(`Download CSV: ${error.response.data.error}`);
      });
  };

  return (
    <div className="download-csv">
      <button onClick={download}>
        <i className="fas fa-download"></i>
      </button>
    </div>
  );
};

export default DownloadCSV;
