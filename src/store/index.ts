import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import storiesReducer from "./stories";

const store = configureStore({
  reducer: { auth: authReducer, stories: storiesReducer },
});

export default store;
