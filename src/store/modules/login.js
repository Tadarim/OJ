import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        showLogin: false,
        isLogin: false,
        userName:'言佚',
        avatarUrl:'http://192.168.105.28:9090/resource/jpg/54qJXPC4R'
    },
    reducers: {
        changeShowLoginAction(state, { payload }) {
            state.showLogin = !state.showLogin
        },
        changeIsLoginAction(state, { payload }) {
            state.isLogin = payload
        },
        changeUserNameAction(state, { payload }) {
            state.userName = payload
        },
        changeAvatarUrlAction(state, { payload }) {
            state.avatarUrl = payload
        },
    }
})

export const {
    changeShowLoginAction,
    changeIsLoginAction,
    changeUserNameAction,
    changeAvatarUrlAction
} = loginSlice.actions

export default loginSlice.reducer