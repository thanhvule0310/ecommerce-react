import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);

export const selectAlert = createSelector([selectUser], (user) => user.alert);

export const selectLoading = createSelector(
  [selectUser],
  (user) => user.loading,
);

export const selectEmailSignInLoading = createSelector(
  [selectLoading],
  (loading) => loading.emailSignIn,
);

export const selectGoogleSignInLoading = createSelector(
  [selectLoading],
  (loading) => loading.googleSignIn,
);

export const selectSignOutLoading = createSelector(
  [selectLoading],
  (loading) => loading.signOut,
);

export const selectSignUpLoading = createSelector(
  [selectLoading],
  (loading) => loading.signUp,
);
