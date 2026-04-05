import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type AuthUser = Record<string, unknown> | null;

export interface AuthState {
  user: AuthUser;
  token: string;
}

const initialState: AuthState = {
  user: null,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(
      state,
      action: PayloadAction<{ user: AuthUser; token: string }>
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
      state.token = "";
    },
    hydrateAuth(
      state,
      action: PayloadAction<{ user: AuthUser; token: string }>
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setAuth, logout, hydrateAuth } = authSlice.actions;
export default authSlice.reducer;
