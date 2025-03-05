import { configureStore } from "@reduxjs/toolkit";
import { recipientsApi } from "./api/recipientsApi";
import { accountApi } from "./api/accountApi"; 

export const store = configureStore({
    reducer:{
        [recipientsApi.reducerPath]: recipientsApi.reducer,
        [accountApi.reducerPath]: accountApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(recipientsApi.middleware)
            .concat(accountApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;