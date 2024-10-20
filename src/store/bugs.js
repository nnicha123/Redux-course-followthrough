import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

// reducer
let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
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
export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser } =
  slice.actions;

// Create memoized selector from createselector
// USing this selector if list of bug hasn't changed, the logic will not be executed again, it will return the result from the cache
// So when called in many places will not re-execute -> e.g. will not have two different arrays in memory
// By putting both bugs and project states, it checks both, if both hasn't changed it will not be re-computed
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (state) => state.entities.projects,
  (bugs, projects) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );
