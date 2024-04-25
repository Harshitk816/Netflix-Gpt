import { createSlice } from '@reduxjs/toolkit'

const detailSlice=createSlice({
    name:'detail',
    initialState:{
        showDetail:false,
        detail:{
            title:null,
            description:null,
            poster_url:null,
        },
    },
    reducers:{
        toggleDetailView:(state, action)=>{
            state.showDetail = !state.showDetail;
        },
        addMovieDetails:(state,action)=>{
            state.detail=action.payload;
        }
    }
})
export default detailSlice.reducer;
export const{toggleDetailView,addMovieDetails}=detailSlice.actions;