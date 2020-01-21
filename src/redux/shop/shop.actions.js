import actionTypes from './shop.types';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/Firebase';

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

export const fetchCollectionsStartAsyncAction = () => (dispatch) => {
  dispatch(fetchCollectionsStartAction());
  const collectionRef = firestore.collection('collections');

  collectionRef
    .get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccessAction(collectionsMap));
    })
    .catch((error) => dispatch(fetchCollectionsFailedAction(error.message)));
};
