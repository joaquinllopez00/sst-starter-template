"use client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { ReactNode } from "react";

export function Provider({ children }: { children: ReactNode }) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
