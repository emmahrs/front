import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserDto } from "../../models/users.model";

interface UserState {
    currentUser: UserDto | null;
}

const initialState: UserState = {
    currentUser: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserDto>) => {
            state.currentUser = action.payload;
        },
        clearUser: (state) => {
            state.currentUser = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice;