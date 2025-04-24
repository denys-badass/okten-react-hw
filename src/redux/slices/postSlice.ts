import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost.ts";
import {postService} from "../../api/post.service.ts";

type PostSliceType = {
    posts: IPost[];
}

const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            const posts = await postService.getAllPosts();
            return thunkAPI.fulfillWithValue(posts)
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });

const postInitialState: PostSliceType = {posts: []};

export const postSlice = createSlice({
    name: "postSlice",
    initialState: postInitialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })
    },
});

export const postActions = {
    ...postSlice.actions, loadPosts
}