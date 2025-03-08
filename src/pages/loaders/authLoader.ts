import { redirect } from "react-router-dom";
import { store } from "../../store";

export async function authLoader() {
  if (store.getState().auth.isAuthenticated) {
    return null;
  }

  return redirect("/signIn");
}