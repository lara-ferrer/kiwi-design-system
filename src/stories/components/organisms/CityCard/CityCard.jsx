import React from "react";
import PropTypes from "prop-types";
import "./city-card.scss";
import "../../../../styles/index.scss";
import { Tag } from "../../atoms/tag/Tag";
import image from "../../../assets/city-image.jpg";

export const CityCard = ({
  city,
  country,
  businessCount,
  businessName,
  size,
  image,
}) => {
  return (
    <div className={`kiwi-city-card kiwi-city-card--${size}`}>
      <div className="kiwi-city-card__overlay" />
      <div
        className="kiwi-city-card__image"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="kiwi-city-card__content">
          <Tag title={`${businessCount} ${businessName}`} size="small" />
          <h3 className="kiwi-city-card__title">
            {city}, {country}
          </h3>
        </div>
      </div>
    </div>
  );
};

CityCard.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  businessCount: PropTypes.number.isRequired,
  businessName: PropTypes.string.isRequired,
  size: PropTypes.string,
};

CityCard.defaultProps = {
  city: "Zaragoza",
  country: "España",
  businessCount: 1250,
  businessName: "restaurantes",
  size: "medium",
  image: image,
};
