import { createStore, applyMiddleware, compose } from "redux";

// import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

import rootReducer from "./reducers";

//customized logger
// const logger = store => next => action => {
//   console.log("Prev State", store.getState());
//   console.log("dispatching", action);
//   let result = next(action);
//   console.log("next State", store.getState());
//   return result;
// };

// const middleware = [logger, promise()];
const middleware = [promise()];
const allStoreEnhancers = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, allStoreEnhancers);

export default store;
