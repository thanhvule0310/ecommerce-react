import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import './SearchBar.scss';
import { setSearchKeywordAction } from '../../redux/shop/shop.actions';

const SearchBar = ({ setSearchKeyword }) => {
  const [keyword, setKeyword] = useState('');
  const { pathname } = useLocation();
  const history = useHistory();
  const checkLocationToShowSearch = () => {
    if (!pathname.includes('/shop') && !pathname.includes('/results')) {
      return false;
    }
    return true;
  };
  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchKeyword(keyword.toLowerCase());
    history.push('/results');
  };
  return (
    <div style={{ display: checkLocationToShowSearch() ? 'block' : 'none' }}>
      <form className="group-search" onSubmit={handleSubmit}>
        <input
          className="form-input-search"
          placeholder="What are your looking for?"
          name="keyword"
          type="text"
          value={keyword}
          onChange={handleChange}
        />
        <button type="submit" className="submit">
          Search
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSearchKeyword: (keyword) => dispatch(setSearchKeywordAction(keyword)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
