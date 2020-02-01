import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  alert: {},
  loading: {
    emailSignIn: false,
    googleSignIn: false,
    signOut: false,
    signUp: false,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_UP_START:
      return { ...state, loading: { ...state.loading, signUp: true } };
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return { ...state, loading: { ...state.loading, emailSignIn: true } };
    case UserActionTypes.GOOGLE_SIGN_IN_START:
      return { ...state, loading: { ...state.loading, googleSignIn: true } };
    case UserActionTypes.SIGN_OUT_START:
      return { ...state, loading: { ...state.loading, signOut: true } };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        loading: {
          ...state.loading,
          emailSignIn: false,
          googleSignIn: false,
          signUp: false,
        },
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
        loading: { ...state.loading, signOut: false },
      };
    case UserActionTypes.SIGN_UP_FAILED:
    case UserActionTypes.SIGN_OUT_FAILED:
    case UserActionTypes.SIGN_IN_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: {
          ...state.loading,
          emailSignIn: false,
          googleSignIn: false,
          signOut: false,
          signUp: false,
        },
      };
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case UserActionTypes.SHOW_ALERT:
      return { ...state, alert: action.payload };
    case UserActionTypes.CLEAR_ALERT:
      return { ...state, alert: {} };
    default:
      return state;
  }
};

export default userReducer;
