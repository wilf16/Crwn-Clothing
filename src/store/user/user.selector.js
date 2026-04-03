import { createSelector } from "reselect";

const selectorUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.currentUser,
);

export const selectAuthenticationErrorMessage = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.authenticationErrorMessage,
);

export const selectSignOutError = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.signOutError,
);
