// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import reducer from "./reducers";

// const composedEnhancers = composeWithDevTools({
//   trace: true,
//   traceLimit: 25,
// });

// const store = createStore(reducer, composedEnhancers(applyMiddleware()));

// export default store;

import {configureStore} from '@reduxjs/toolkit'
import { tasksSlice } from './slices/tasks.slice';

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer
  }
});

export default store;