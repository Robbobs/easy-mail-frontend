import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  hasCheckedSession: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  hasCheckedSession: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = action.payload;
      state.hasCheckedSession = true;
    },
    logout: (state) => {
        state.isAuthenticated = false;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
