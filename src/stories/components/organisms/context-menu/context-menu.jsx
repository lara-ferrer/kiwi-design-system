import React from "react";
import PropTypes from "prop-types";
import "./context-menu.scss";
import "../../../../styles/index.scss";

export const ContextMenu = ({ options, onClose }) => {
  return (
    <>
      <div className="kiwi-context-menu__overlay" onClick={onClose} />
      <div className="kiwi-context-menu">
        {options.map(({ name, action }) => (
          <div className="kiwi-context-menu__option" onClick={() => action()}>{name}</div>
        ))}
      </div>
    </>
  );
};

ContextMenu.propTypes = {
  options: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
  }),
  onClose: PropTypes.func
};

ContextMenu.defaultProps = {
  options: [
    {
      name: 'Option 1',
      action: () => alert('Option 1 clicked')
    },
    {
      name: 'Option 2',
      action: () => alert('Option 2 clicked')
    }
  ]
};
