import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './SearchBar.scss';
import { ReactComponent as LoadDataIcon } from '../../assets/svg/loading.svg';

const SearchBar = ({ handleChange, name, type, value }) => {
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = () => {
    setIsFocus(true);
  };
  const handleBlur = () => {
    setIsFocus(false);
  };
  const { pathname } = useLocation();
  const checkLocationToShowSearch = () => {
    if (pathname === '/signin' || pathname === '/contact') {
      return false;
    }
    return true;
  };

  return (
    <div style={{ display: checkLocationToShowSearch() ? 'block' : 'none' }}>
      <form className="group-search">
        <input
          className="form-input-search"
          placeholder="What are your looking for?"
          name={name}
          type={type}
          value={value}
          required
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button type="submit" className="submit">
          Search
        </button>
      </form>
      {/* <div
        className="search-result"
        style={{ display: isFocus ? 'block' : 'none' }}
      >
        <div className="image">
          <LoadDataIcon />
        </div>
        Waitting for search!
      </div> */}
    </div>
  );
};

export default SearchBar;
