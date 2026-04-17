import { createSelector } from "reselect";

import type { RootState } from "../store";
import type { UserState } from "./user.reducer";

const selectorUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.currentUser,
);

export const selectErrorMessage = createSelector(
  [selectorUserReducer],
  (userSlice) => userSlice.errorMessage,
);
