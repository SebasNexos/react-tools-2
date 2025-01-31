import { useState } from "react"


export const App = () => {

  const createTodos = () => {

    const initialTodos = []; 

    for (let i = 0; i < 25; i++) {

      initialTodos.push({
        id: i, 
        text: 'Item' + (i + 1)
      }); 

    }

    return initialTodos; 

  }


  const [todos, setTodos] = useState(createTodos); 
  const [text, setText] = useState(); 

  
  return (
    <div>
      
      <input 
        type="text" 
        onChange={ (e) => setText(e.target.value)} 
        value={text}
      /> 
      <button
        onClick={() => {
          setText(''); 
          setTodos([{
            id: todos.length, 
            text
          }, ...todos]); 
        }}
      >
        Agregar item
      </button>

      <ul>
        {
          todos.map( item => (
            <li key={item.id}>{item.text}</li>
          ))
        }
      </ul>
      

    </div>
  )
}
