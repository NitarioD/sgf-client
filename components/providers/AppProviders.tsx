"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { AuthSync } from "./AuthSync";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthSync />
      {children}
    </Provider>
  );
}
