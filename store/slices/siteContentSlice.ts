import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** CMS payload from /base_page/home (home, footer, about snippets, etc.) */
export type SiteBasics = Record<string, unknown>;

export interface SiteContentState {
  basics: SiteBasics;
}

const initialState: SiteContentState = {
  basics: {},
};

const siteContentSlice = createSlice({
  name: "siteContent",
  initialState,
  reducers: {
    setSiteBasics(state, action: PayloadAction<SiteBasics>) {
      state.basics = action.payload;
    },
  },
});

export const { setSiteBasics } = siteContentSlice.actions;
export default siteContentSlice.reducer;
