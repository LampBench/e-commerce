import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import themeReducer from "./themeSlice";
import categoryReducer from "./categorySlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
        category: categoryReducer,
    },
});
