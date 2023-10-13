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
  onInput
}) => {
  var inputClass = classNames({
    'kiwi-input--disabled': isDisabled,
    'kiwi-input--danger': isDanger
  });

  return (
    <div className={`kiwi-input ${inputClass}`}>
      {variant && variant.type === 'icon' && <Icon name={variant.name} />}
      <input type={type} placeholder={placeholder} onInput={onInput} />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "password", "date"]).isRequired,
  variant: PropTypes.object,
  isDisabled: PropTypes.bool,
  isDanger: PropTypes.bool,
  onInput: PropTypes.func
};

Input.defaultProps = {
  placeholder: "Write something here...",
  type: "text",
  isDisabled: false,
  isDanger: false
};
