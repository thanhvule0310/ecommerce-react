import { takeLatest, call, put } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/Firebase';

import ShopActionTypes from './shop.types';
import {
  fetchCollectionsSuccessAction,
  fetchCollectionsFailedAction,
} from './shop.actions';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot,
    );
    yield put(fetchCollectionsSuccessAction(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailedAction(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync,
  );
}
