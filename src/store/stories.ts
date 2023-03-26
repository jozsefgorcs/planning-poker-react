import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Button } from "reactstrap";
import { storiesApi } from "../api/ConfiguredService";
import { FinishedStoryDto } from "../api/swagger";

export type Story = {
  id: number;
  title: string;
  description: string;
};

type StoriesState = {
  availableStories: Story[];
  estimableStory: Story | null;
  estimatedStories: FinishedStoryDto | null;
};
const initialStoriesState: StoriesState = {
  availableStories: [],
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

    rollbackCurrentlyEstimable(state) {
      if (!state.estimableStory) return;
      state.availableStories.push(state.estimableStory);
      state.estimableStory = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.availableStories = action.payload;
    });

    builder.addCase(addStory.fulfilled, (state, action) => {
      state.availableStories.push(action.payload);
    });

    builder.addCase(startEstimation.fulfilled, (state, action) => {
      state.estimableStory = state.availableStories.filter(
        (x) => x.id === action.payload
      )[0];
      state.availableStories = state.availableStories.filter(
        (x) => x.id !== action.payload
      );
    });
    builder.addCase(finishEstimation.fulfilled, (state, action) => {
      state.estimableStory = null;
    });
    builder.addCase(fetchEstimatedStories.fulfilled, (state, action) => {
      state.estimatedStories = action.payload;
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

export const fetchEstimatedStories = createAsyncThunk(
  "stories/fetchEstimatedStories",
  async () => {
    let { data } = await storiesApi.apiStoriesGetFinishedStoriesGet();
    return data;
  }
);

export const addStory = createAsyncThunk(
  "stories/addStory",
  async (story: Story) => {
    let { data } = await storiesApi.apiStoriesPostStoryPost(story);
    return { ...story, id: data.id };
  }
);

export const startEstimation = createAsyncThunk(
  "stories/startEstimation",
  async (storyId: number) => {
    await storiesApi.apiStoriesStartEstimationIdPost(storyId);
    return storyId;
  }
);

export const finishEstimation = createAsyncThunk(
  "stories/finishEstimation",
  async (storyId: number) => {
    await storiesApi.apiStoriesFinishEstimationIdPost(storyId);
    return storyId;
  }
);

export const storiesActions = storiesSlice.actions;

export default storiesSlice.reducer;
