import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProblemset } from "../../services/modules/problemset";

export const fetchProblemsetAction = createAsyncThunk("fetchProblemset", (payload, { dispatch }) => {
    getAllProblemset().then(res => {
        dispatch(changeProblemset(res?.data?.list))
        console.log(res)
    }
    )
})

const problemsetSlice = createSlice({
    name: 'problemset',
    initialState: {
        problemsetList: {}
    },
    reducers: {
        changeProblemset(state, { payload }) {
            state.problemsetList = payload
        }
    }
})

export const { changeProblemset } = problemsetSlice.actions
export default problemsetSlice.reducer

