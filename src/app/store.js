import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import imagesReducer from "../features/imagesSlice";
import { imagesApi } from "../services/images";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    [imagesApi.reducerPath]: imagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imagesApi.middleware),
});

setupListeners(store.dispatch);
