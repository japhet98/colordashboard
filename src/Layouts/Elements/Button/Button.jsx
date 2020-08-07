import React from "react";
import "./index.css";
function Button({ className, style, label, onSubmit, onClick }) {
  return (
    <span>
      <button
        type="button"
        className={`${className} ele-button btn btn-primary`}
        style={style}
        onSubmit={onSubmit}
        onClick={onClick}
      >
        {label}
      </button>
    </span>
  );
}
export default Button;
