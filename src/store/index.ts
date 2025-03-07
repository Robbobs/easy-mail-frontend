import { configureStore } from "@reduxjs/toolkit";
import { recipientsApi } from "./api/recipientsApi";
import { accountApi } from "./api/accountApi"; 
import { authApi } from "./api/authApi";
import  authReducer  from "./slices/authSlice";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        [recipientsApi.reducerPath]: recipientsApi.reducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(recipientsApi.middleware)
            .concat(accountApi.middleware)
            .concat(authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;