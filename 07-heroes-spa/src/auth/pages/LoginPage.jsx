import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

  const { login } = useContext( AuthContext )
  const navigate = useNavigate(); // para ir a una ruta en especifico 

  const onLogin = () => { 

    const lastPath = localStorage.getItem('lasPath') || '/marvel';

    login('Sebastian Urrego')

    navigate(lastPath, {replace: true}) // especificar la ruta que queremos ir

  }


  return (
    <div className="container mt-5">

      <h1>Login</h1>

      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login 
      </button>

    </div>
  )
}
