import React from "react";
import PropTypes from "prop-types";
import "./card.scss";
import "../../../../styles/index.scss";

export const Card = ({
  image,
  title,
  address
}) => {

  return (
    <div class="kiwi-card">
      <img class="kiwi-card__image" src={image} alt={title} />
      <div class="kiwi-card__content">
        <h4 class="kiwi-card__title">{title}</h4>
        <p class="kiwi-card__address">{address}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};

Card.defaultProps = {
  title: "Green restaurant",
  address: "Lettuce Street, 8, Zaragoza"
};

