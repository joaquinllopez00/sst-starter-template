import { UserObj } from "@repo/app-types";
import { createSlice } from "@reduxjs/toolkit";

export interface UsersState {
  me: UserObj | null;
}

const initialState: UsersState = {
  me: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.me = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
