import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']; 
    if ( !validPublishers.includes( publisher ) ) {
        return "Ha ocurrido un error en el publisher"
    }

    return heroes.filter( heroe => heroe.publisher === publisher );

}