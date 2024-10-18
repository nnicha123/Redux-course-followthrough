import * as actions from "./actionTypes";
import store from "./store";

// Subscribe to store to get changes when store changes
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// Dispatching actions
store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "Bug1",
  },
});

// Unsubscribe so wouldn't get second update of when the store changes
unsubscribe();

// Dispatch remove bug
store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
