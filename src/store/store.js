import { compose, createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// root-reducer

const middleWares = [logger];

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composeEnhancers);

// export const StoreProvider = ({ children }) => {
//   return <Provider store={store}>{children}</Provider>;
// };
