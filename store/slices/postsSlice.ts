import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface PostsState {
  teaching: unknown[];
  publication: unknown[];
  video: unknown[];
  evangelism: unknown[];
}

const initialState: PostsState = {
  teaching: [],
  publication: [],
  video: [],
  evangelism: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setTeachingPosts(state, action: PayloadAction<unknown[]>) {
      state.teaching = action.payload;
    },
    setPublicationPosts(state, action: PayloadAction<unknown[]>) {
      state.publication = action.payload;
    },
    setVideoPosts(state, action: PayloadAction<unknown[]>) {
      state.video = action.payload;
    },
    setEvangelismPosts(state, action: PayloadAction<unknown[]>) {
      state.evangelism = action.payload;
    },
  },
});

export const {
  setTeachingPosts,
  setPublicationPosts,
  setVideoPosts,
  setEvangelismPosts,
} = postsSlice.actions;

export default postsSlice.reducer;
