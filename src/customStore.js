import reducer from "./store/reducer";

function createStore(reducer) {
  let state;
  let listeners = [];

  function subscribe(Listener) {
    console.log("pushing to listeners");
    listeners.push(Listener);
  }

  function dispatch(action) {
    // Call reducer to get the new state
    state = reducer(state, action);

    for (let i = 0; i < listeners.length; i++) {
      console.log(listeners[i]);
      listeners[i]();
    }
  }

  function getState() {
    return state;
  }
  return {
    getState,
    dispatch,
    subscribe,
  };
}

export default createStore(reducer);
