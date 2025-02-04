import { useSelector, useDispatch } from 'react-redux'
import { setUser, unsetUser } from './reducers/user/userSlice';
import './App.css'

function App() {

  const dispatch = useDispatch(); 

  const {email, fullName} = useSelector(state => state.user); // aqui se obtiene el estado global del reducer user y obtener información del estado 

  console.log(email, fullName)

  return (
    <>
      <h1>Hola mundo de redux toolkit</h1>
      <h3>{fullName}</h3>
      <p>La imagen es bella no la desperdicies. El email del usuario es {email}</p>
      <button 
        className='btn btn-primary'
        onClick={() => dispatch(setUser({ // estos son los payloads que se envian al reducer
          email: 'urregos358@gmail.com',
          fullName: 'Sebastian Urrego Graciano',
          token: '123456789'
        }))}
      >Cambiar user</button>

      <button 
        className='btn btn-primary'
        onClick={() => dispatch(unsetUser())} // este no se le envia nada ya que no tiene payload en el usersSlice 
      >unsetUser</button>
    </>
  )
}


export default App