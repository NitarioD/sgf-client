import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
  menuOpen: boolean;
  /** Admin dashboard section content buffer */
  adminContent: string;
}

const initialState: UiState = {
  menuOpen: false,
  adminContent: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMenuOpen(state, action: PayloadAction<boolean>) {
      state.menuOpen = action.payload;
    },
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
    setAdminContent(state, action: PayloadAction<string>) {
      state.adminContent = action.payload;
    },
  },
});

export const { setMenuOpen, toggleMenu, setAdminContent } = uiSlice.actions;
export default uiSlice.reducer;
