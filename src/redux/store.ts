import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        UserStoreSlice: UserSlice.reducer,
        PostStoreSlice: PostSlice.reducer,
        CommentStoreSlice: CommentSlice.reducer,
    }
})