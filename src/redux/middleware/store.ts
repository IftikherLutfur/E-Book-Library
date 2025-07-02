import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "../api/baseApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
        [bookApi.reducerPath] : bookApi.reducer,
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(bookApi.middleware),
})

setupListeners(store.dispatch)


