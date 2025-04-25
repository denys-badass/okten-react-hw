import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost.ts";
import {IComment} from "../../models/IComment.ts";
import {userServices} from "../../api/user.services.ts";

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
        const posts = await userServices.getUserPosts(id);
        return thunkAPI.fulfillWithValue({id, posts})
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
        builder.addCase(loadUserPosts.fulfilled, (state, action: PayloadAction<{id: number, posts: IPost[]}>) => {
            state.userPosts[action.payload.id] = action.payload.posts;
        })
    }
})

export const complexActions = {
    ...complexSlice.actions,
    loadUserPosts,
}