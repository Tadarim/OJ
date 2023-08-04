import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './modules/login'
import problemReducer from './modules/problem'
import likeReducer from './modules/like'


const store = configureStore({
    reducer:{
        login: loginReducer,
        problem: problemReducer,
        like: likeReducer
    }
})

export default store