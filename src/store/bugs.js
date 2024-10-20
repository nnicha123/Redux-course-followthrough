import { createAction, createReducer } from "@reduxjs/toolkit";

export const bugAdded = createAction("bugAdded");
export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

// reducer
let lastId = 0;

export default createReducer([], {
  // key: value
  // actions: functions (event => event handler)
  //  don't need to use ...state because under the hood, redux devtools uses immer -> so we can write mutating code
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    });
  },

  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolved = true;
  },

  [bugRemoved.type]: (bugs, action) => {
    return bugs.filter((bug) => bug.id !== action.payload.id);
  },
});
