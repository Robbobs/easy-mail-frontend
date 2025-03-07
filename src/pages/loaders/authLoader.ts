import { setAuth } from "../../store/slices/authSlice";
import { authApi } from "../../store/api/authApi";
import { redirect } from "react-router-dom";
import { store } from "../../store";

export async function authLoader() {
  const isAuthenticated = store.getState().auth.isAuthenticated;

  if (isAuthenticated) {
    return null;
  }

  const result = await store.dispatch(authApi.endpoints.checkSession.initiate());
  const authStatus = result.data?.isAuthenticated ?? false;

  store.dispatch(setAuth(authStatus));

  if (!authStatus) {
    return redirect("/signIn");
  }

  return null;
}