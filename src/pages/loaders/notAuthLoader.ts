import { redirect } from "react-router-dom";
import { store } from "../../store";

export async function notAuthLoader() {
  if (!store.getState().auth.isAuthenticated) {
    return null;
  }

  return redirect("/recipients");
}