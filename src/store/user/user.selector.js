import { createSelector } from "reselect";

const selectorUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.currentUser,
);

export const selectErrorMessage = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.errorMessage,
);
