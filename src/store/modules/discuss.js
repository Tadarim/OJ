import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const discussSlice = createSlice({
    name:'discuss',
    initialState:{
        discussList:{

        }
    },
    reducers:{
        changeDiscussListAction(state,{payload}){
            state.discussList= payload?.data?.discuss
        }
    }
})