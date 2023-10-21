import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

export default configureStore({
    reducer: {
        user: reducer,
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    }),
});