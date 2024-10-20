import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugAssignedToUser,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import { userAdded } from "./store/users";
import { projectAdded } from "./store/projects";
import configureStore from "./store/configureStore";

const store = configureStore();

store.subscribe(() => {
  console.log("store changed!");
});

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(projectAdded({ name: "Project 1" }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 2 }));

const unresolvedBugs = getUnresolvedBugs(store.getState());
console.log(unresolvedBugs);

const user1Bugs = getBugsByUser(1)(store.getState());
console.log(user1Bugs);
