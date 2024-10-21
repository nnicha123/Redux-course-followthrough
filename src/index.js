import configureStore from "./store/configureStore";
import { loadBugs } from "./store/bugs";

const store = configureStore();

// store.dispatch(() => {
//   store.dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
// });

// store.dispatch({
//   type: "error",
//   payload: { message: "An error occured" },
// });

store.dispatch(loadBugs());

setTimeout(() => {
  store.dispatch(loadBugs());
}, 2000);
