import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = (props) => {

  function handleChange(event) {
    props.textChange(event);
  }

  return (
    <input type="text" className="search-input" 
            onChange={handleChange}
    />
  )
};

SearchInput.propTypes = {
  textChange: PropTypes.func.isRequired,
};

export default SearchInput;
