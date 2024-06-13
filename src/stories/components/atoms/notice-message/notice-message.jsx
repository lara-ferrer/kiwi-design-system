import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../icon";
import "./notice-message.scss";

export const NoticeMessage = ({ children }) => {
  return (
    <div className="kiwi-notice-message">
      <Icon name="notice" />
      <div className="kiwi-notice-message__children">
        { children }
      </div>
    </div>
  );
};

NoticeMessage.propTypes = {
  children: PropTypes.node.isRequired,
};

NoticeMessage.defaultProps = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
