import React from "react";
import PropTypes from "prop-types";
import "./tag.scss";
import "../../../../styles/index.scss";

export const Tag = ({
  title
}) => {
  return (
    <div class="kiwi-tag">{title}</div>
  );
};

Tag.propTypes = {
  title: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  title: "Vegan",
};
