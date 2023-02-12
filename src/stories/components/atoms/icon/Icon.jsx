import React from "react";
import PropTypes from "prop-types";
import "./icon.scss";
import "../../../../icons/icons.css";
import "../../../../styles/index.scss";

export const Icon = ({
  name
}) => {

  return (
    <span class={`icon icon-${name}`}></span>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

Icon.defaultProps = {
  name: "leaf"
};

