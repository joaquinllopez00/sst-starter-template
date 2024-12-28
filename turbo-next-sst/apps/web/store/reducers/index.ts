import { combineReducers } from "@reduxjs/toolkit";
import { userService } from "store/services/userService";
import userReducer from "./users";

export const rootReducer = combineReducers({
  [userService.reducerPath]: userService.reducer,
  user: userReducer,
});
