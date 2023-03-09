import React from "react";
import PropTypes from "prop-types";
import "./radio.scss";
import "../../../../styles/index.scss";

export const Radio = ({
  label,
  id,
  name
}) => {

  return (
    <label className="kiwi-radio" for={name}>
      <input type="radio" id={id} name={name} />
      <span class="kiwi-radio__selector" />
      <span className="kiwi-radio__label">{label}</span>
    </label>
  );
};

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  label: 'Some option here',
  id: "option",
  name: "option"
};

