import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./searcher.scss";
import "../../../../styles/index.scss";

export const Searcher = ({
  placeholder,
  isDisabled,
  isDanger
}) => {
  var searcherClass = classNames({
    'kiwi-searcher--disabled': isDisabled,
    'kiwi-searcher--danger': isDanger
  });

  return (
    <input type="search" className={`kiwi-searcher ${searcherClass}`} placeholder={placeholder}></input>
  );
};

Searcher.propTypes = {
  placeholder: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isDanger: PropTypes.bool
};