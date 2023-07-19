import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './modules/login'
import problemsetReducer from './modules/problemset'
import problemReducer from './modules/problem'

const store = configureStore({
    reducer:{
        login: loginReducer,
        problemset: problemsetReducer,
        problem: problemReducer
    }
})

export default store