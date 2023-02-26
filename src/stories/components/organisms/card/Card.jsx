import React from "react";
import PropTypes from "prop-types";
import "./card.scss";
import "../../../../styles/index.scss";

export const Card = ({ image, title, address, openTime, isOpen }) => {
  return (
    <div class="kiwi-card">
      <img class="kiwi-card__image" src={image} alt={title} />
      <div class="kiwi-card__content">
        <div>
          <div class="pb--12">
            <h4>{title}</h4>
            <p class="kiwi-subtitle">{address}</p>
          </div>
          <p class="kiwi-subtitle">{openTime}</p>
          <p class="kiwi-subtitle kiwi-subtitle--alert">{isOpen && "NOW OPEN"}</p>
        </div>
        <p class="kiwi-subtitle">3,2 OUT OF 1500 reviews</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  openTime: PropTypes.string.isRequired,
  isOpen: PropTypes.bool,
};

Card.defaultProps = {
  title: "Green restaurant",
  address: "Lettuce Street, 8, Zaragoza",
  openTime: "mon - sun: 13:00h - 16:00h",
  isOpen: true,
};
