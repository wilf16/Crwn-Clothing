import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { USER_ACTION_TYPES } from "./user.types";

import { signInSuccess, signInFailed } from "./user.action";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails,
    );
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(
    USER_ACTION_TYPES.CHECK_USER_SESSION,
    call(isUserAuthenticated),
  );
}

export function* onSignInSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_IN_SUCCESS);
}

export function* userSaga() {
  yield all([call(onCheckUserSession)]);
}
