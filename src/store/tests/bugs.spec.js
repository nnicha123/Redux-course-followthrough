import { addBug } from "../bugs";
import configureStore from "../configureStore";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("bugsSlice", () => {
  it("should handle the addBug action", async () => {
    const bug = { description: "b" };
    const savedBug = { ...bug, id: 1 };

    const fakeAxios = new MockAdapter(axios);
    fakeAxios.onPost("/bugs").reply(200, savedBug);

    const store = configureStore();
    await store.dispatch(addBug(bug));
    console.log(store.getState().entities.bugs.list);
    expect(store.getState().entities.bugs.list).toContainEqual(savedBug);
  });
});
