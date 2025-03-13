import { redirect } from "react-router-dom";
import { store } from "../../store";
import { authApi } from "../../store/api/authApi";

export async function notAuthLoader() {
    const result = await store.dispatch(authApi.endpoints.checkSession.initiate()).unwrap();
    
    if (result.isAuthenticated) {
        return redirect("/recipients");
    }

    return null;
}
