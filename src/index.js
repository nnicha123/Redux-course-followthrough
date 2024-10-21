import configureStore from "./store/configureStore";
import * as actions from "./store/api";

const store = configureStore();

store.dispatch(() => {
  store.dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
});

store.dispatch({
  type: "error",
  payload: { message: "An error occured" },
});

store.dispatch(
  actions.apiCallBegan({
    url: "bugs",
    onSuccess: "bugsReceived",
    // onError: actions.apiCallFailed.type,
  })
);
