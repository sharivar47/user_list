import {createSlice} from "@reduxjs/toolkit";

export interface AuthState {
    token: string;
}
const initialState: AuthState = {
    token: "",
};
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthToken(state, action) {
            state.token = action.payload;
        },
    },
});
export const {setAuthToken} = authSlice.actions;
export const selectAuthToken = (state: any) => state.auth.token;