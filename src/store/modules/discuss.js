import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const discussSlice = createSlice({
    name:'discuss',
    initialState:{
        discussList:[],
        everyList:[],
    },
    reducers:{
        changeDiscussListAction(state,{payload}){
            state.discussList= payload?.data?.discuss
        }
    }
})

export const {changeDiscussListAction} = discussSlice.actions

export default discussSlice.reducer