import func from "./middleware/func";
import logger from "./middleware/logger";
import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export default function () {
  return configureStore({
    reducer,
    middleware: [logger({ destination: "console" }), func],
  });
}
