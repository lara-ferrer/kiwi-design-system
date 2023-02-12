import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./select.scss";
import "../../../../styles/index.scss";

export const Select = ({
  placeholder,
  isDisabled,
  isDanger
}) => {
  var inputClass = classNames({
    'kiwi-input--disabled': isDisabled,
    'kiwi-input--danger': isDanger
  });

  return (
    <select className={`kiwi-input ${inputClass}`}>
      <option value="">--Please choose an option--</option>
      <option value="dog">Dog</option>
      <option value="dog">Dog</option>
    </select>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isDanger: PropTypes.bool
};

Select.defaultProps = {
  placeholder: "Write something here...",
  isDisabled: false,
  isDanger: false
};
