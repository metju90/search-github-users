import React from "react";
import { FaSpinner } from "react-icons/fa";
import "./style.css";

export default ({ isOverlay }) => (
  <div id="spinner-wrapper" className={isOverlay ? "spinner-over-content" : ""}>
    <FaSpinner className="spinner" size={22} />
  </div>
);
