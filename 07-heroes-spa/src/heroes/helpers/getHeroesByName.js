import { heroes } from "../data/heroes";


export const getHeroesByName = ( name = '' ) => {

    name = name.toLocaleLowerCase().trim(); //para que sea case insensitive
    if ( name.lenght === 0) return [];


    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name )
    )
   
}