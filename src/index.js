import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import { projectAdded } from "./store/projects";
import configureStore from "./store/configureStore";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed!");
});

store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 2 }));

console.log(store.getState());
