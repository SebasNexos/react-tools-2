import { useState } from "react"
import { UserContext } from "./UserContext"

//const user = {
//    id: 123,
//    name: 'Sebastian Urego', 
//    email: 'surregograciano@gmail.com'
//}

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(); // utilizamos un useState para almacenar la información y modificar la información

  return (
    <UserContext.Provider value={{ user, setUser }}> {/* Toda es información pueden ser utilizada por los hijos que esten dentro */}
      {children}
    </UserContext.Provider>
  )
}





