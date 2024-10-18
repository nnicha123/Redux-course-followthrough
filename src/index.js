import { bugAdded, bugRemoved } from "./actions";
import store from "./store";

// Subscribe to store to get changes when store changes
const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

// Dispatching actions
store.dispatch(bugAdded("Bug 1"));

// Unsubscribe so wouldn't get second update of when the store changes
unsubscribe();

// Dispatch remove bug
store.dispatch(bugRemoved(1));
