import { configureStore } from "@reduxjs/toolkit";
import { recipientsApi } from "./api/recipientsApi";

export const store = configureStore({
    reducer:{
        [recipientsApi.reducerPath]: recipientsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(recipientsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;