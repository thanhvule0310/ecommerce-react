import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import withSpinner from '../../HOC/withSpinner/withSpinner';
import SearchResult from './SearchResult';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const SearchResultContainer = compose(
  connect(mapStateToProps),
  withSpinner,
)(SearchResult);

export default SearchResultContainer;
