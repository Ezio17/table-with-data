import React from 'react';

const Search = props => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="search"
        value={props.search}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Search;
