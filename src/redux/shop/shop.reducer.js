import actionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: '',
  keyword: '',
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case actionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, isFetching: false, collections: action.payload };
    case actionTypes.FETCH_COLLECTIONS_FAILED:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case actionTypes.SET_SEARCH_KEYWORD:
      return { ...state, keyword: action.payload };
    default:
      return state;
  }
};

export default shopReducer;
