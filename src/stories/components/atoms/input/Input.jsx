import React from "react";
import PropTypes from "prop-types";
import "./input.scss";
import "../../../../styles/index.scss";

export const Input = ({
  placeholder,
  type,
  isDisabled,
  isDanger
}) => {
  return (
    <input type={type} className={`kiwi-input ${isDisabled ? "kiwi-input--disabled" : ""
      } ${isDanger ? "kiwi-input--danger" : ""
      }`} placeholder={placeholder}></input>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password", "date"]),
  isDisabled: PropTypes.bool,
  isDanger: PropTypes.bool
};

Input.defaultProps = {
  placeholder: "Write something here...",
  type: "text",
  isDisabled: false,
  isDanger: false
};
