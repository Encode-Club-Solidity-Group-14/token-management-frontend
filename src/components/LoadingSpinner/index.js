import React from "react";
import "./styles.css";
import logo from "../../assets/alien-going-to-space-emoji-animation.gif"

export default function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      <img src={logo} alt="loading..." />
      </div>
    </div>
  );
}