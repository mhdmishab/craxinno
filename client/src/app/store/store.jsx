import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice} from '../slices/authSlice';
import { personalInfoSlice } from '../slices/authSlice';

const rootReducer = combineReducers({
    userData: userSlice.reducer,
    saveData:personalInfoSlice.reducer
});

export const store = configureStore({
    reducer: rootReducer
})