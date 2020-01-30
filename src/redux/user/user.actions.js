import actionTypes from './user.types';

export const setCurrentUser = (user) => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStartAction = () => ({
  type: actionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStartAction = (emailAndPassword) => ({
  type: actionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccessAction = (user) => ({
  type: actionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailedAction = (error) => ({
  type: actionTypes.SIGN_IN_FAILED,
  payload: error,
});
