import React from "react";
import PropTypes from "prop-types";
import { Tag } from "../tag";
import "./search-result.scss";

export const SearchResult = ({ name, link, address, categories }) => {
  return (
    <a className="kiwi-search-result" href={link}>
      <div className="kiwi-search-result__business">
        <span className="kiwi-search-result__name">{name}</span>
        <span className="kiwi-search-result__address">{address}</span>
      </div>
      <div className="kiwi-search-result__categories">
        {categories.map((category, i) => (
          <Tag title={category} key={`kiwi-tag-${i}`} size="small" />
        ))}
      </div>
    </a>
  );
};

SearchResult.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

SearchResult.defaultProps = {
  name: "Los Helechos",
  address: "Zaragoza, España",
  categories: ["Vegetariano", "Vegano"],
  link: "https://www.google.es"
};
