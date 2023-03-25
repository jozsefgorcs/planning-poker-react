import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Button } from "reactstrap";
import { storiesApi } from "../api/ConfiguredService";
type story = {
  id: number;
  title: string;
  description: string;
};
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
  extraReducers: (builder) => {
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.availableStories = action.payload;
    });

    builder.addCase(addStory.fulfilled, (state, action) => {
      state.availableStories = action.payload;
    });
  },
});

export const fetchStories = createAsyncThunk(
  "stories/fetchStories",
  async () => {
    let { data } = await storiesApi.apiStoriesGetAllNotEstimatedGet();
    return data;
  }
);

export const addStory = createAsyncThunk("stories/addStory", async (story) => {
  await storiesApi.apiStoriesPostStoryPost(story); //TODO think it through
  let { data } = await storiesApi.apiStoriesGetAllNotEstimatedGet();
  return data;
});

export const storiesActions = storiesSlice.actions;

export default storiesSlice.reducer;
