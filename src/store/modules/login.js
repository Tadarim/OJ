import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLoginInfo } from "../../services/modules/login";

const loginSlice = createSlice({
    name:'login',
    initialState:{
        showLogin:false,
        isLogin:false
    },
    reducers:{
        changeShowLoginAction(state,{payload}){
            state.showLogin = !state.showLogin
        },
        changeIsLoginAction(state,{payload}){
            state.isLogin = !state.isLogin
        }
    }
})

export const {
    changeShowLoginAction,
    changeIsLoginAction    
} = loginSlice.actions

export default loginSlice.reducer