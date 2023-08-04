import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
    name:'like',
    initialState:{
        isLike:false,
        discussList:[]
    },
    reducers:{
        changeIsLikeAction(state,{payload}){
            state.isLike = !state.isLike
        },
        changeDiscussListAction(state,{payload}){
            const list = [...state.discussList]
            list.includes(payload)
            ?
            list.splice(list.findIndex(filterItem => filterItem === payload), 1)
            :
            list.push(payload)
            state.discussList = list
        },
    }
})

export const {changeIsLikeAction,changeDiscussListAction} = likeSlice.actions
export default likeSlice.reducer