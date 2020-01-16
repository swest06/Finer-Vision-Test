import React, { Fragment, useState } from "react";

const Accordion = ({ title, fields, open, toggleOpen, position }) => {
  //
  // Returns the appropriate input tag and type
  const generateInputField = ({ type, options }) => {
    switch (type) {
      case "textarea":
        return <textarea type="text" />;
      case "select":
        return (
          <select>
            <option value="" selected disabled hidden>
              Select Gender
            </option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return <input type={type} />;
    }
  };

  const isOpen = () => {
    if (open) {
      return "-open";
    } else {
      return "";
    }
  };

  const toggle = e => {
    e.preventDefault();
    toggleOpen(position);
  };

  const handleChange = event => {
    console.log("handleChange");
    event.preventDefault();
  };

  return (
    <Fragment>
      <button className={`fieldset`}>{title}</button>
      <div className={`form-panel${isOpen()}`}>
        {fields.map((field, index) => (
          <div key={index} className="input">
            <label>{field.name}</label>
            {generateInputField(field)}
          </div>
        ))}
        <button className="btn btn-next btn-secondary" onClick={toggle}>
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default Accordion;
