import { Navigate, Route, Routes } from "react-router-dom"; 
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";


//import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar/>
      <hr />
    
      <Routes>
        <Route path="/" element={ <HomePage/> }></Route>
        <Route path="/login" element={ <LoginPage/> }></Route>
        <Route path="/about" element={ <AboutPage/> }></Route>

        {/**<Route path="/*" element={ <LoginPage/> }></Route>*/} {/**Esto es para hacer que una ruta si no existe llegue a este lugar */}

        <Route path="/*" element={<Navigate to="/about"/>}></Route> {/*Esto es para hacer que una ruta si no existe llegue a este lugar de una mejor manera*/}


      </Routes>
    </UserProvider>
  )
}

