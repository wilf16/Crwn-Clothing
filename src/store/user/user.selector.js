import { createSelector } from "reselect";

const selectorUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.currentUser,
);

export const selectSignInError = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.signInError,
);

export const selectSignOutError = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.signOutError,
);
