import store from "./customStore";
import * as actions from "./actions";

store.subscribe(() => console.log("next action"));

store.subscribe(() => {
  console.log("store changed!");
});

store.dispatch(actions.bugAdded("Bug 1"));

store.dispatch(actions.bugAdded("Bug 2"));
store.dispatch(actions.bugAdded("Bug 2"));
console.log(store.getState());
