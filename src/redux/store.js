import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./queries/userApi";
import skipReducer from "./skipSlice";

export const store = configureStore({
     reducer: {
          skip:skipReducer,
          [userApi.reducerPath]: userApi.reducer
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
})