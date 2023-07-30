import { createSlice } from "@reduxjs/toolkit";

const solutionSlice = createSlice({
    name:'solution',
    initialState:{
        solutionList:[]
    },
    reducers:{
        changeSolutionListAction(state,{payload}){
            state.solutionList = payload
        }
    }
})


export default solutionSlice.reducer