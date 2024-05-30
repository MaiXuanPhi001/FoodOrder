import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import mainSlice from "./slices/mainSlice";

export const store = configureStore({
    reducer: {
        main: mainSlice,
        user: userSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store