import React from "react";
import PropTypes from "prop-types";
import "./text-card.scss";
import "../../../../styles/index.scss";

export const TextCard = ({ children }) => {
  return (
    <div className={`kiwi-text-card`}>
      {children}
    </div>
  );
};

TextCard.propTypes = {
  children: PropTypes.node.isRequired,
};