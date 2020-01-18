import actionTypes from './shop.types';

export const updateCollectionsAction = (collectionsMap) => ({
  type: actionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
