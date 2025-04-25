import {IUser} from "../../models/IUser.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {userServices} from "../../api/user.services.ts";

type UserSliceType = {
    users: IUser[];
}

const userInitialState: UserSliceType = {users: []};

const loadUsers = createAsyncThunk(
    'userSlice/loadUsers',
    async (_, thunkAPI) => {
        try {
            const users = await userServices.getAllUsers();
            return thunkAPI.fulfillWithValue(users);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    });

export const userSlice = createSlice({
    name: "userSlice",
    initialState: userInitialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.users = action.payload
        })
            .addCase(loadUsers.rejected, (state, action) => {
                console.log(state);
                console.log(action);
        })
    }
})

export const userActions = {
    ...userSlice.actions,
    loadUsers,
}