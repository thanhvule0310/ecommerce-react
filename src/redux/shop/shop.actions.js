import actionTypes from './shop.types';

export const fetchCollectionsStartAction = () => ({
  type: actionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccessAction = (collectionsMap) => ({
  type: actionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailedAction = (errorMessage) => ({
  type: actionTypes.FETCH_COLLECTIONS_FAILED,
  payload: errorMessage,
});
