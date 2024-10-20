import { createSlice } from "@reduxjs/toolkit";

// reducer
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      return bugs.filter((bug) => bug.id !== action.payload.id);
    },
  },
});

export default slice.reducer;
export const { bugAdded, bugRemoved, bugResolved } = slice.actions;

export const getUnresolvedBugs = (state) =>
  state.entities.bugs.filter((bug) => !bug.resolved);
