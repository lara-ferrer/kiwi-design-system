import React from "react";
import PropTypes from "prop-types";
import "./business-card.scss";
import "../../../../styles/index.scss";
import { Tag } from "../../atoms/tag/Tag.jsx";

export const BusinessCard = ({ image, title, address, openTime, isOpen, categories }) => {
  return (
    <div className="kiwi-business-card">
      <img className="kiwi-business-card__image" src={image} alt={title} />
      <div className="kiwi-business-card__content">
        <div>
          <div className="pb--12">
            <h4>{title}</h4>
            <p className="kiwi-subtitle">{address}</p>
          </div>
        </div>
        <div className="kiwi-business-card__footer">
          <div className="kiwi-business-card__categories">
            {categories.map((category, i) => <Tag title={category} key={`kiwi-tag-${i}`} size="small" />)}
          </div>
          {/* <p className="kiwi-subtitle">{openTime}</p>
          <p className="kiwi-subtitle kiwi-subtitle--alert">{isOpen && "NOW OPEN"}</p> */}
        </div>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
  /* openTime: PropTypes.string.isRequired,
  isOpen: PropTypes.bool, */
};

BusinessCard.defaultProps = {
  title: "Green restaurant",
  address: "Lettuce Street, 8, Zaragoza",
  categories: ['Vegan', 'Vegetarian']
/*   openTime: "mon - sun: 13:00h - 16:00h",
  isOpen: true, */
};
