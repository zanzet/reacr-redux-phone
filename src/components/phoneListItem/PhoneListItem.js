import './phoneListItem.css'

const PhoneListItem = (props) =>{
    const {name, phone, email, onDelete} = props
    return(
        <div className="wrap">
            <div className="wrape_name">
                <div className="name">{name}</div>
                <button onClick={onDelete}>Delete</button>
            </div>
            <div className="number"> number: {phone}</div>
            <div className="email">email: {email}</div>
        </div>
        
    )
}
export default PhoneListItem