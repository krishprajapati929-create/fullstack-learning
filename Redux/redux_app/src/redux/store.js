import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterslice'



export const store = configureStore({ 
    reducer:{
        counter: counterReducer,

    }
 })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on