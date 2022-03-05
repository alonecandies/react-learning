import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";

const composedEnhancers = composeWithDevTools({
  trace: true,
  traceLimit: 25,
});

const store = createStore(reducer, composedEnhancers(applyMiddleware()));

export default store;
