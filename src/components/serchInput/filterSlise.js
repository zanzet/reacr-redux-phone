import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = '';

const filterSlise = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        setStateFilter: (state, action)=>{
           return(state = action.payload)
        },
    }
})

export const {  setStateFilter } = filterSlise.actions;
export default filterSlise.reducer;