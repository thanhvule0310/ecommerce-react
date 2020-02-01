import { takeLatest, put, all, call, delay } from 'redux-saga/effects';

import UserActionTypes from './user.types';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/Firebase';
import {
  signInSuccessAction,
  signInFailedAction,
  signOutSuccessAction,
  signOutFailedAction,
  signUpFailedAction,
  signUpSuccessAction,
  showAlertAction,
  clearAlertAction,
} from './user.actions';
import AlertTypes from '../../utils/AlertTypes/AlertTypes';

export function* Alert(content) {
  yield put(clearAlertAction());
  yield put(showAlertAction(content));
}

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData,
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccessAction({ id: userSnapshot.id, ...userSnapshot.data() }),
    );
  } catch (error) {
    yield put(signInFailedAction(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
    yield Alert(AlertTypes.signIn.success);
  } catch (error) {
    yield put(signInFailedAction(error.message));
    yield Alert(AlertTypes.signIn.error);
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
    yield Alert(AlertTypes.signIn.success);
  } catch (error) {
    yield put(signInFailedAction(error.message));
    yield Alert({ type: 'error', message: error.message });
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
    yield Alert(AlertTypes.signIn.success);
  } catch (error) {
    yield put(signInFailedAction(error.message));
    yield Alert({ type: 'error', message: error.message });
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield delay(500);
    yield auth.signOut();
    yield put(signOutSuccessAction());
    yield Alert(AlertTypes.signOut.success);
  } catch (error) {
    yield put(signOutFailedAction(error.message));
    yield Alert({ type: 'error', message: error.message });
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);

    yield put(signUpSuccessAction({ user, additionalData: { displayName } }));
    yield Alert(AlertTypes.signUp.success);
  } catch (error) {
    yield put(signUpFailedAction(error.message));
    yield Alert({ type: 'error', message: error.message });
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
