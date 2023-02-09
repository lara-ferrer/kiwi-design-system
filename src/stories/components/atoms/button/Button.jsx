import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./button.scss";
import "../../../../styles/index.scss";

export const Button = ({
  state,
  size,
  label,
  isDisabled,
  isDanger,
  onClick,
}) => {
  var btnClass = classNames({
    'kiwi-button--disabled': isDisabled,
    'kiwi-button--danger': isDanger
  });

  return (
    <button
      type="button"
      className={`kiwi-button btnClass kiwi-button--${state} kiwi-button--${size} ${btnClass}`}
      onClick={onClick}
    >
      <span className={`kiwi-text-button--${size}`}>{label}</span>
    </button>
  );
};

Button.propTypes = {
  state: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isDanger: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  state: "primary",
  size: "large",
  label: "Click here",
  isDisabled: false,
  isDanger: false,
  onClick: undefined,
};
