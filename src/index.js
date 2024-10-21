import configureStore from "./store/configureStore";
import { loadBugs, addBug, resolveBug, assignBugToUser } from "./store/bugs";

const store = configureStore();

// store.dispatch(() => {
//   store.dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
// });

// store.dispatch({
//   type: "error",
//   payload: { message: "An error occured" },
// });

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(assignBugToUser(2, 4)), 2000);

// store.dispatch(addBug({ description: "a" }));
