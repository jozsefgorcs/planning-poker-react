import { Configuration, StoriesApi } from "./swagger/index";

let configuration = new Configuration({
  basePath: import.meta.env.VITE_BASE_URL,
});

export const storiesApi = new StoriesApi(configuration);
