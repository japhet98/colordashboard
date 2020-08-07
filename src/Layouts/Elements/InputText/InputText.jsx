import React from "react";
import "./index.css";

const Required = (
  <span>
    {" "}
    <b>
      <sup className="required-color">*</sup>
    </b>
  </span>
);
const TextInput = ({
  name,
  value,
  onChange,
  id,
  className,
  required,
  label,
}) => {
  return (
    <div className="full-textinput">
      <label htmlFor={name} className="label-textinput">
        <b> {label}</b>
      </label>{" "}
      {required ? Required : ""}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        id={id}
        className={`${className} ele-textinput form-control`}
        required={required ? true : false}
      />
    </div>
  );
};

export default TextInput;
