import React from "react";
import PropTypes from "prop-types";
import "./tag.scss";
import "../../../../styles/index.scss";

export const Tag = ({ title, size, link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className={`kiwi-tag kiwi-tag--${size} ${link && `kiwi-tag--link`}`}>
        {title}
      </div>
    </a>
  );
};

Tag.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf("small", "medium"),
};