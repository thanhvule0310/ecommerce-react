import actionTypes from './user.types';

const INITIAL_STATE = { currentUser: null, error: null };

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };
    case actionTypes.SIGN_IN_FAILED:
      return { ...state, error: action.payload };
    case actionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};

export default userReducer;
