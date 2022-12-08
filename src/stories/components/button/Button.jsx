import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ state, size, label, disabled }) => {
  return (
    <button
      type="button"
      className={`kiwi-button kiwi-button--${state} kiwi-button--${size} ${disabled ? 'kiwi-button--disabled' : ''}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  state: PropTypes.oneOf(['primary', 'secondary']),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  state: 'primary',
  size: 'medium',
  disabled: false,
  onClick: undefined,
};
