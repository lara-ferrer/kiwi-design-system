import React from "react";
import PropTypes from "prop-types";
import "./modal.scss";
import "../../../../styles/index.scss";

export const Modal = ({ heading, body, size, footer, onClose }) => {
  return (
    <>
      <div className="kiwi-modal__overlay" onClick={onClose} />
      <div className={`kiwi-modal kiwi-modal--${size}`}>
        <span className="kiwi-modal__icon-close" onClick={onClose}>
          X
        </span>
        {heading && <h3 className="kiwi-modal__heading">{heading}</h3>}
        {body}
        {footer && <div className="kiwi-modal__footer">{footer}</div>}
      </div>
    </>
  );
};

Modal.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.element.isRequired,
  size: PropTypes.oneOf("large", "medium").isRequired,
  onClose: PropTypes.func.isRequired,
  footer: PropTypes.element,
};

Modal.defaultProps = {
  heading: "Modal Heading",
  body: (
    <p>
      <strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit.
      Quis non sed non pellentesque. Eu ornare volutpat eget volutpat. Amet, sit
      laoreet ac aenean quam tempus erat orci. Velit quam viverra diam egestas
      lacinia ut. Pulvinar feugiat vitae elementum at. Faucibus imperdiet urna
      volutpat vitae lectus egestas proin nunc. Hendrerit placerat cras diam ac
      cras est dis. Quis scelerisque tempor mi justo, viverra urna mattis. At
      gravida pharetra ac a. Facilisis integer tempor nec, ac, et. Netus non
      duis pharetra elementum. Facilisi diam fermentum non morbi faucibus
      suspendisse eget. Morbi risus arcu egestas tincidunt. Elementum amet,
      libero gravida porttitor placerat enim. Turpis adipiscing sit donec semper
      egestas ligula congue scelerisque.
    </p>
  ),
};
