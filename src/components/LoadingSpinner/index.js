import React from "react";
import "./styles.css";

export default function LoadingSpinner(props) {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
        <img src={props.logo} alt="loading..." />
      </div>
    </div>
  );
}