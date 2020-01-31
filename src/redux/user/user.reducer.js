import UserActionTypes from './user.types';

const INITIAL_STATE = { currentUser: null, error: null, loading: false };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.EMAIL_SIGN_IN_START:
    case UserActionTypes.SIGN_OUT_START:
      return { ...state, loading: true };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        loading: false,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null, loading: false };
    case UserActionTypes.SIGN_OUT_FAILED:
    case UserActionTypes.SIGN_IN_FAILED:
      return { ...state, error: action.payload, loading: false };
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};

export default userReducer;
