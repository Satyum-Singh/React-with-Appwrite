import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { myreducer } from "./reducer";

export const store = configureStore({reducer:{
    [api.reducerPath]:api.reducer,
    [myreducer.name]:myreducer.reducer,
    },
    middleware:(mid) => mid().concat(api.middleware),
});