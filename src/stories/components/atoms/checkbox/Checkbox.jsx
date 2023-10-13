import React from "react";
import PropTypes from "prop-types";
import "./checkbox.scss";
import "../../../../styles/index.scss";

export const Checkbox = ({
  label,
  id,
  name,
  onClick
}) => {
  return (
    <label className="kiwi-checkbox" for={name} onClick={onClick}>
      <input type="checkbox" id={id} name={name} />
      <span class="kiwi-checkbox__box" />
      <span className="kiwi-checkbox__label">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Checkbox.defaultProps = {
  label: 'Some option here',
  id: "option",
  name: "option"
};
