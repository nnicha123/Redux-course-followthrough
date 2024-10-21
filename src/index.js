import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch(() => {
  store.dispatch({ type: "bugsReceived", bugs: [1, 2, 3] });
});

store.dispatch({
  type: "error",
  payload: { message: "An error occured" },
});
