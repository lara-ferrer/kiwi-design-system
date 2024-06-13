import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Icon } from '../icon';
import "./input.scss";
import "../../../../styles/index.scss";

export const Input = ({
  placeholder,
  variant,
  type,
  isDisabled,
  isDanger,
  isClearable,
  onClear,
  onInput,
  onBlur,
  onKeyDown
}) => {
  var inputClass = classNames({
    'kiwi-input--disabled': isDisabled,
    'kiwi-input--danger': isDanger
  });

  return (
    <div className={`kiwi-input ${inputClass}`}>
      {variant && variant.type === 'icon' && <Icon name={variant.name} />}
      <input type={type} placeholder={placeholder} onInput={onInput} onBlur={onBlur} onKeyDown={onKeyDown} />
      {isClearable && <span className="kiwi-input__clear" onClick={() => onClear}>X</span>}
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password", "date"]).isRequired,
  variant: PropTypes.object,
  isDisabled: PropTypes.bool,
  isDanger: PropTypes.bool,
  isClearable: PropTypes.bool,
  onClear: PropTypes.func,
  onInput: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func
};

Input.defaultProps = {
  placeholder: "Write something here...",
  type: "text",
  isDisabled: false,
  isDanger: false,
  isClearable: false
};
