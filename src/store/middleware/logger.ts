import {
  type Middleware,
  isAction,
  type UnknownAction,
  type Dispatch,
} from "redux";
import type { RootState } from "../store";

export const loggerMiddleware: Middleware<
  {},
  RootState,
  Dispatch<UnknownAction>
> = (store) => (next) => (action) => {
  if (!isAction(action)) {
    return next(action);
  }
  if (!action.type) {
    return next(action);
  }

  console.log("Type: ", action.type);
  if (typeof action === "object" && action && "payload" in action) {
    console.log("Payload: ", action.payload);
  }
  console.log("CurrentState: ", store.getState());

  next(action);

  console.log("Next State: ", store.getState());
};
