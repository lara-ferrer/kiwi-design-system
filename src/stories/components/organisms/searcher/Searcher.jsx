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
  isClearable,
  onInput,
  onClear,
  onKeyDown
}) => {
  const variant = {
    type: "icon",
    name: "search",
  };

  return (
    <div className="kiwi-searcher">
      <Input
        type="text"
        variant={variant}
        placeholder={placeholder}
        onInput={onInput}
        isDisabled={isDisabled}
        isDanger={isDanger}
        isClearable={false}
        onClear={onClear}
        onKeyDown={onKeyDown}
      />
      {results && (
        <div className="kiwi-searcher__results">
          {
            results.length ? results.map(({ name, link, address, categories }) => (
              <SearchResult
                name={name}
                address={address}
                categories={categories}
                link={link}
              />
            )) :
            <p>No se han encontrado resultados</p>
          }
        </div>
      )}
    </div>
  );
};

Searcher.propTypes = {
  placeholder: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isDanger: PropTypes.bool,
  onInput: PropTypes.func,
  onKeyDown: PropTypes.func
};
