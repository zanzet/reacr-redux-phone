import './serchInput.css';

import { useDispatch } from 'react-redux';
import {  setStateFilter } from './filterSlise'

const SerchInput = () =>{

    const dispatch = useDispatch()

    const onChangeFilter = (e) =>{
        dispatch(setStateFilter(e.target.value))
    }

    return(
        <>
            <h2>Введите имя:</h2>
            <input 
                type="text" 
                name="name"
                onChange={onChangeFilter} 
                required
            />
        </>
        
    )
}
export default SerchInput