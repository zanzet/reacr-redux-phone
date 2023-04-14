import { useState, useId } from "react"
import { phoneCreate } from "../phoneList/phoneSlise"
import { useDispatch } from "react-redux"
import useHttp from '../../hook/http.hook'


const AddForm = () =>{

    const[name, setName]= useState('');
    const[email, setEmail]= useState('');
    const[tel, setTel]= useState('');
    const dispatch = useDispatch()
    const { controller } = useHttp();
    const id = useId()
    const addContact = (e) =>{
        e.preventDefault();

        const dataContact = {
            id: id,
            name: name,
            email: email,
            phone: tel
        }
        controller(`https://6224bf0d6c0e39662045a917.mockapi.io/directores`,'POST', dataContact)
            .then(res => console.log(res, 'Отправка успешна'))
            .then(dispatch(phoneCreate(dataContact)))
            .catch(err => console.log(err))

        setName('')
        setEmail('')
        setTel('')
    }

    return(
        <div style={{"display":'flex',"flexDirection": 'column', "marginLeft": '30px'}}>
            <h2>Добавить контакт:</h2>
            <form onSubmit={addContact}>
                    <input 
                        required
                        type="text" 
                        name="name" 
                        className="form-control" 
                        id="name" 
                        placeholder="Имя:"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}/>
                    
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 

                        placeholder="Почта:"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}/>
                    
                    <input 
                        required
                        type="tel" 
                        name="tel" 
                        className="form-control" 
                        id="number" 
                        placeholder="Номер:"
                        value={tel}
                        onChange={(e) => {setTel(e.target.value)}}/>
                <button style={{"width":'200px', "height": '45px', "fontSize": '20px',"marginTop": '20px'}} type="submit">Создать</button>
            </form>
        </div>
    )
}
export default AddForm