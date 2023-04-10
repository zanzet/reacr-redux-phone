import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { CSSTransition, TransitionGroup} from 'react-transition-group';

import PhoneListItem from "../phoneListItem/PhoneListItem"
import Spinner from '../spinner/Spinner'

import { fetchPhone, phoneDelete, filteredHeroesSelector } from './phoneSlise'
import useHttp from '../../hook/http.hook'


const PhoneList = () =>{

    const phone = useSelector(filteredHeroesSelector)
    const phoneLoadingStatus = useSelector(state=> state.phone.phoneLoadingStatus)
    const dispatch = useDispatch();
    const { controller } = useHttp();

    useEffect(()=>{
        dispatch(fetchPhone(controller))
        // eslint-disable-next-line  
    },[])

    const onDelete =useCallback((id) =>{
        controller(`https://6224bf0d6c0e39662045a917.mockapi.io/directores/${id}`, 'DELETE')
            .then(dispatch(phoneDelete(id)))
            .catch(err => console.log(err))
    // eslint-disable-next-line 
    }, [controller])

    if(phoneLoadingStatus === 'loading'){
        return <Spinner/>
    }else if(phoneLoadingStatus === 'error'){
        return <h4>произошла ошибка</h4>
    }

    const renderList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition
                    timeout={0}
                    classNames="hero">
                    <h5 className="text-center mt-5">Контактов пока нет</h5>
                </CSSTransition>
            )
        }
        return arr.map(({id,...props}) => {
            return(
                <CSSTransition 
                    key={id}
                    timeout={500}>
                    <PhoneListItem  {...props} onDelete={() => onDelete(id)}/>
                </CSSTransition>

            )
        })   
    }
    const elements = renderList(phone)
    return(
        <>
            <h3>Результат поиска:</h3>
            <TransitionGroup component="div">
                {elements}
            </TransitionGroup>
        </>
        
    )
}

export default PhoneList