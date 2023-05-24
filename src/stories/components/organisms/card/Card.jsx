import React from "react";
import PropTypes from "prop-types";
import "./card.scss";
import "../../../../styles/index.scss";
import { Tag } from "../../atoms/tag/Tag.jsx";

export const Card = ({ image, title, address, openTime, isOpen, categories }) => {
  return (
    <div className="kiwi-card">
      <img className="kiwi-card__image" src={image} alt={title} />
      <div className="kiwi-card__content">
        <div>
          <div className="pb--12">
            <h4>{title}</h4>
            <p className="kiwi-subtitle">{address}</p>
          </div>
          <div className="kiwi-card__categories">
            {categories.map((category, i) => <Tag title={category} key={`kiwi-tag-${i}`} size="small" />)}
          </div>
        </div>
        <div className="kiwi-card__footer">
          <p className="kiwi-subtitle">{openTime}</p>
          <p className="kiwi-subtitle kiwi-subtitle--alert">{isOpen && "NOW OPEN"}</p>
        </div>
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
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

Card.defaultProps = {
  title: "Green restaurant",
  address: "Lettuce Street, 8, Zaragoza",
  openTime: "mon - sun: 13:00h - 16:00h",
  isOpen: true,
  categories: ['Vegan', 'Vegetarian']
};
