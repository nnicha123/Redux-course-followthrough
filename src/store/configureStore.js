import logger from "./middleware/logger";
import reducer from "./reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// Instead of creating an extra middleware (to make sure we can handle the next action being a function)
// we use getDefaultMiddleware from redux toolkit
export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger({ destination: "console" })],
  });
}
