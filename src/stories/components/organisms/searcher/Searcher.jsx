import React from "react";
import PropTypes from "prop-types";
import { Input } from "../../atoms/input";
import { SearchResult } from "../../atoms/search-result";
import "./searcher.scss";
import "../../../../styles/index.scss";

export const Searcher = ({
  placeholder,
  isDisabled,
  isDanger,
  results,
  onInput,
}) => {
  const variant = {
    type: "icon",
    name: "search"
  }

  return (
    <div className="kiwi-searcher">
      <Input type="text" variant={variant} placeholder={placeholder} onInput={onInput} isDisabled={isDisabled} isDanger={isDanger} />
      {results && (
        <div className="kiwi-searcher__results">
          {results.map(({name, link, address, categories}) => <SearchResult name={name} address={address} categories={categories} />)}
        </div>
      )}
    </div>
  );
};

Searcher.propTypes = {
  placeholder: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isDanger: PropTypes.bool,
  onInput: PropTypes.func
};