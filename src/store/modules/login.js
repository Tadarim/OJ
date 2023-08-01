import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLoginInfo } from "../../services/modules/login";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        showLogin: false,
        isLogin: false,
        userId: ''
    },
    reducers: {
        changeShowLoginAction(state, { payload }) {
            state.showLogin = !state.showLogin
        },
        changeIsLoginAction(state, { payload }) {
            state.isLogin = !state.isLogin
        },
        changeUserIdAction(state, { payload }) {
            state.userId = payload
        }
    }
})

export const {
    changeShowLoginAction,
    changeIsLoginAction,
    changeUserIdAction
} = loginSlice.actions

export default loginSlice.reducer