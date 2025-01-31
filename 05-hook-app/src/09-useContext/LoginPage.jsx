import { useContext } from "react"
import { UserContext } from "./context/UserContext";


export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext ); // aqui obtiene la info del context que creamos 

    return (
      <>
        <h1>LoginPage</h1>
        <hr />

        <pre>
          {
            JSON.stringify( user, null, 3 )
          }
        </pre>
        <button 
          className="btn btn-primary"
          onClick={ () => setUser({ id: 123, name: 'Sebastian Urego', email: 'surregograciano@gmail.com'})}
        >
          Establecer usuario 
        </button>


      </>
    )
}