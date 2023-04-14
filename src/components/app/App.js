import './App.css';
import SerchInput from '../serchInput/SerchInput';
import PhoneList from '../phoneList/PhoneList';
import AddForm from '../addForm/AddForm';
function App() {
  return (
    <div className="wrap-main__contact">
      <div className="App">
        <SerchInput/>
        <PhoneList/>
      </div>
      <AddForm/>
    </div>
  );
}

export default App;
