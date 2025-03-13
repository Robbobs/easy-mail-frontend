import { recipientsApi } from "./api/recipientsApi";
import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "./slices/authSlice";
import { accountApi } from "./api/accountApi"; 
import { groupApi } from "./api/groupsApi";
import { authApi } from "./api/authApi";

export const store = configureStore({
    reducer:{
        [recipientsApi.reducerPath]: recipientsApi.reducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [groupApi.reducerPath]: groupApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(recipientsApi.middleware)
            .concat(accountApi.middleware)
            .concat(groupApi.middleware)
            .concat(authApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;