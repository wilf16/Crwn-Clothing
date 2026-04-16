import { createSelector } from "reselect";
import type { UserState } from "./user.reducer";

const selectorUserReducer = (state): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.currentUser,
);

export const selectErrorMessage = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.errorMessage,
);
