import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLoginInfo } from "../../services/modules/login";

export const fetchUserInfoAction = createAsyncThunk("fetchToken",({email,code,login_type},{dispatch}) => {
    console.log(email,code,login_type)
    getLoginInfo(email,code,login_type).then(res => {
        dispatch(changeUserTokenAction(res))
    })
})

const loginSlice = createSlice({
    name:'login',
    initialState:{
        token:"",
        showLogin:false,
        isLogin:false
    },
    reducers:{
        changeUserTokenAction(state,{payload}){
            console.log(payload.data)
            state.token = payload.data.accessToken
        },
        changeShowLoginAction(state,{payload}){
            state.showLogin = !state.showLogin
        },
        changeIsLoginAction(state,{payload}){
            state.isLogin = !state.isLogin
        }
    }
})

export const {
    changeUserTokenAction,
    changeShowLoginAction,
    changeIsLoginAction    
} = loginSlice.actions

export default loginSlice.reducer