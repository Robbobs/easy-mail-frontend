import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: true,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setAuth: (state, action) => {
        state.isAuthenticated = action.payload;
        state.isLoading = false;
      },
      logout: (state) => {
        state.isAuthenticated = false;
        state.isLoading = false;
      },
    },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
