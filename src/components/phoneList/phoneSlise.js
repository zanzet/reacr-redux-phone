import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hook/http.hook";

const initialState = {
    phone: [],
    phoneLoadingStatus: 'idle'
}

export const fetchPhone = createAsyncThunk(
    'phone/fetchPhone',
    () => {
        const { controller } = useHttp()
        return  controller("https://6224bf0d6c0e39662045a917.mockapi.io/directores");   
    }
)

const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        phoneDelete: (state, action) => {
            state.phone = state.phone.filter(item => item.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhone.pending, (state) => {
                state.phoneLoadingStatus = 'loading';
            })
            .addCase(fetchPhone.fulfilled, (state, action) => {
                state.phoneLoadingStatus = 'idle';
                state.phone = action.payload;
            })
            .addCase(fetchPhone.rejected, (state) => {
                state.phoneLoadingStatus = 'error';
            })
    }
})

const { actions, reducer } = phoneSlice;

export default reducer;

export const { phoneDelete } = actions;
