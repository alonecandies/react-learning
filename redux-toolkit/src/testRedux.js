import { createStore } from "redux";

const initialState = {
   count: 0
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case "INCREMENT":
         return {
            count: state.count + 1
         }
      case "DECREMENT":
         return {
            count: state.count - 1
         }
      default:
         return state
   }
}

const store = createStore(reducer) 

let action = {
   type: "INCREMENT"
}

store.dispatch(action)

console.log(store.getState())