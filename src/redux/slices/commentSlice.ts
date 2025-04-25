import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComment.ts";
import {commentService} from "../../api/comment.service.ts";

type CommentSliceType = {
    comments: IComment[];
}

const commentInitialState: CommentSliceType = {comments: []};

const loadComments = createAsyncThunk(
    'commentSlice/loadComments',
    async (_, thunkAPI) => {
        const comments = await commentService.getAllComments();
        return thunkAPI.fulfillWithValue(comments);
    });

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState: commentInitialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        })
    }
});

export const commentActions = {
    ...commentSlice.actions, loadComments
}