import { createSlice } from "@reduxjs/toolkit";

const initialStoriesState = {
  availableStories: [
    { id: 1, title: "Test title", description: "Bar" },
    { id: 2, title: "Second story", description: "Foo" },
  ],
  estimableStory: {},
};

const storiesSlice = createSlice({
  name: "stories",
  initialState: initialStoriesState,
  reducers: {
    addStory(state, action) {
      state.availableStories.push(action.payload);
    },
    setStoryEstimable(state, action) {
      state.estimableStory = state.availableStories.filter(
        (x) => x.id === action.payload
      )[0];
      state.availableStories = state.availableStories.filter(
        (x) => x.id !== action.payload
      );
    },
    closeCurrentlyEstimable(state) {
      state.estimableStory = {};
    },
    rollbackCurrentlyEstimable(state) {
      if (!state.estimableStory) return;
      state.availableStories.push(state.estimableStory);
      state.estimableStory = {};
    },
  },
});

export const storiesActions = storiesSlice.actions;

export default storiesSlice.reducer;
