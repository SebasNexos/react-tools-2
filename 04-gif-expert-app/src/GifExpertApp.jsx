import { useState } from "react"
import { AddCategory, GifGrid } from './components/'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch ']); // Creación del sneepe

    const onAddCategory = ( newCategory ) => {

      if( categories.includes(newCategory)) return; // es revisar si ya existe esa categoria dentro de la categoria y salir con return 
      
      setCategories([ newCategory, ...categories])

    }

  return (
    <>

        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory = {event => onAddCategory(event)}
        /> 


        { categories.map( (category) => 
        (
              <GifGrid key={ category } category={ category }/>
            )) 
        }
        

    </>
  )
}
