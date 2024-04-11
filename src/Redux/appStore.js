import {configureStore} from '@reduxjs/toolkit'
import userReducer from './Slices/userSlice';
import movieReducer from './Slices/moviesSlice'
import gptReducer from "./Slices/gptSlice"
import configReducer from './Slices/configSlice';
const appStore = configureStore(
    {
        reducer:{
            config:configReducer,
            user:userReducer, 
            movies:movieReducer,
            gpt:gptReducer,
        }, 
    }
);

export default appStore;
