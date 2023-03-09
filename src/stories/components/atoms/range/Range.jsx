import React from "react";
import PropTypes from "prop-types";
import "./range.scss";
import "../../../../styles/index.scss";

export const Range = ({
  min,
  max
}) => {

  let value = 0;
  const handleChange = (e) => {
    value = e.target.value;
  }

  return (
    <div>
      <input type="range" className="kiwi-range" min={min} max={max} onInput={handleChange}></input>
      <span>{value}</span>
    </div>
  );
};

Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

Range.defaultProps = {
  min: 0,
  max: 100
};
