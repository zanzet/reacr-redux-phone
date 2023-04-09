import { configureStore } from '@reduxjs/toolkit'
import phone from '../components/phoneList/phoneSlise'

const stringMiddleware = () => (dispatch) => (action) =>{
    if (typeof action == 'string') {
        return dispatch({
            type: action
        })
    }
    return dispatch(action)
}

const store = configureStore({
    reducer: { phone },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
}) 

export default store;