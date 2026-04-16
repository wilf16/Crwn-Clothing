import type { UnknownAction } from "redux";
import type { UserData } from "../../utils/firebase/firebase.utils";

import {
  signInSuccess,
  signOutSuccess,
  signInFailed,
  signUpFailed,
  signOutFailed,
} from "./user.action";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly errorMessage: string | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  errorMessage: null,
};

export const userReducer = (
  state = INITIAL_STATE,
  action: UnknownAction,
): UserState => {
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
      errorMessage: null,
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
    };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return {
      ...state,
      errorMessage: action.payload,
    };
  }
  return state;
};
