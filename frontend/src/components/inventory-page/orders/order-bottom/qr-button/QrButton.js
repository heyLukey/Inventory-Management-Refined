import React from "react";
import QRCode from "qrcode.react";
import "./QrButton.css";

const QrButton = ({ orderObject }) => {
  const downloadQR = () => {
    const canvas = document.getElementById(`QR-${orderObject.title}`);
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `QR-${orderObject.title}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <React.Fragment>
      <div style={{ display: "none" }}>
        <QRCode
          className="qr-download"
          size={512}
          id={`QR-${orderObject.title}`}
          value={`http://localhost:3000/inventory/${orderObject._id}`}
          includeMargin={true}
        />
      </div>
      <button onClick={downloadQR}>
        <i className="fas fa-qrcode"></i>
      </button>
    </React.Fragment>
  );
};

export default QrButton;
