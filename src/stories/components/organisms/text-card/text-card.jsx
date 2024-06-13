import React from "react";
import PropTypes from "prop-types";
import "./text-card.scss";
import "../../../../styles/index.scss";

export const TextCard = ({ image, children }) => {
  return (
    <div className={`kiwi-text-card ${image && 'kiwi-text-card--image'}`}>
      {image && <img src={image} />}
      {children}
    </div>
  );
};

TextCard.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
};