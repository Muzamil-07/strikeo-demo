import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/User";
import jacketPositionReducer from "./slices/JacketPosition";
import cartReducer from "./slices/Cart";
import themeReducer from "./slices/Theme";
import favouritesReducer from "./slices/Favourite";
import categoriesReducer from "./slices/Category";
import billingReducer from "./slices/Billing";
import vendorViewReducer from "./slices/View";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { nodeAPI } from "../services/nodeApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const reducers = combineReducers({
  [nodeAPI.reducerPath]: nodeAPI.reducer,
  billing: billingReducer,
  user: userReducer,
  cart: cartReducer,
  theme: themeReducer,
  favourites: favouritesReducer,
  jacketPosition: jacketPositionReducer,
  categories: categoriesReducer,
  vendorView: vendorViewReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["nodeAPI"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      nodeAPI.middleware
    ),
});
setupListeners(store.dispatch);
