import React from "react";
import PropTypes from "prop-types";
import "./tag.scss";
import "../../../../styles/index.scss";

export const Tag = ({
  title, size
}) => {
  return (
    <div className={`kiwi-tag kiwi-tag--${size}`}>
      {title}
    </div>
  );
};

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf('small', 'medium')
};

Tag.defaultProps = {
  title: "Vegan",
};
