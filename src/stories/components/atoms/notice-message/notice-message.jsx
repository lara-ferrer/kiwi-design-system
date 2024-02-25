import React from "react";
import PropTypes from "prop-types";
import { Icon } from "../icon/Icon";
import "./notice-message.scss";

export const NoticeMessage = ({ message }) => {
  return (
    <div className="kiwi-notice-message">
      <Icon name="notice" />
      {message}
    </div>
  );
};

NoticeMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

NoticeMessage.defaultProps = {
  message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};
