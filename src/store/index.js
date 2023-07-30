import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './modules/login'
import problemsetReducer from './modules/problemset'
import problemReducer from './modules/problem'
import discussReducer from './modules/discuss'
import solutionReducer from './modules/solution'

const store = configureStore({
    reducer:{
        login: loginReducer,
        problemset: problemsetReducer,
        problem: problemReducer,
        discuss: discussReducer,
        solution: solutionReducer
    }
})

export default store