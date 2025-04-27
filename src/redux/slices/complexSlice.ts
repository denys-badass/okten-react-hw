import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost.ts";
import {IComment} from "../../models/IComment.ts";
import {postService} from "../../api/post.service.ts";
import {commentService} from "../../api/comment.service.ts";

type ComplexSliceType = {
    isComplex: boolean;
    userPosts: Record<number, IPost[]>;
    postComments: Record<number, IComment[]>;
}

const complexInitialState: ComplexSliceType = {
    isComplex: false,
    userPosts: {},
    postComments: {},
};

const loadUserPosts = createAsyncThunk(
    'complexSlice/loadUserPosts',
    async (id: number, thunkAPI) => {
        const posts = await postService.getPostsByUserId(id);
        return thunkAPI.fulfillWithValue({id, posts})
    }
);

const loadPostComments = createAsyncThunk(
    'complexSlice/loadPostComments',
    async (id: number, thunkAPI) => {
        const comments = await commentService.getCommentsByPostId(id);
        return thunkAPI.fulfillWithValue({id, comments});
    }
)

export const complexSlice = createSlice({
    name: "complexSlice",
    initialState: complexInitialState,
    reducers: {
        setIsComplex: (state, action: PayloadAction<boolean>) => {
            state.isComplex = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loadUserPosts.fulfilled, (state, action: PayloadAction<{id: number, posts: IPost[]}>) => {
                state.userPosts[action.payload.id] = action.payload.posts;
        })
            .addCase(loadPostComments.fulfilled, (state, action: PayloadAction<{id: number, comments: IComment[]}>) => {
                state.postComments[action.payload.id] = action.payload.comments;
            })
    }
})

export const complexActions = {
    ...complexSlice.actions,
    loadUserPosts,
    loadPostComments,
}