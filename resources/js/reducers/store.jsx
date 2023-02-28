import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import themeReducer from "./themeSlice";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import manufacturerReducer from "./manufacturerSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
        category: categoryReducer,
        product: productReducer,
        manufacturer: manufacturerReducer
    },
});
