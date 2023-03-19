import { createSlice } from "@reduxjs/toolkit";

const initialStoriesState = {
  availableStories: [
    { id: 1, title: "Test title", description: "Bar" },
    { id: 2, title: "Second story", description: "Foo" },
  ],
  estimableStory: null,
};

const storiesSlice = createSlice({
  name: "stories",
  initialState: initialStoriesState,
  reducers: {
    addStory(state, action) {
      state.availableStories.push(action.payload);
    },
    setStoryEstimable(state, action) {
      state.estimableStory = action.payload;
      state.availableStories = state.availableStories.filter(
        (x) => x.id !== action.payload.id
      );
    },
    closeCurrentlyEstimable(state) {
      state.estimableStory = null;
    },
    rollbackCurrentlyEstimable(state) {
      if (!state.estimableStory) return;
      state.availableStories.push(state.estimableStory);
      state.estimableStory = null;
    },
  },
});

export const storiesActions = storiesSlice.actions;

export default storiesSlice.reducer;
