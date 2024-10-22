import { addBug } from "../bugs";
import configureStore from "../configureStore";

describe("bugsSlice", () => {
  it("should handle the addBug action", async () => {
    // dispatch(addBug) => store
    const store = configureStore();
    const bug = { description: "b" };
    await store.dispatch(addBug(bug));
    console.log(store.getState().entities.bugs.list);
    expect(store.getState().entities.bugs.list).toHaveLength(1);
  });
});
