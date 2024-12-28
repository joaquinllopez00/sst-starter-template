import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { userService } from "./services/userService";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
