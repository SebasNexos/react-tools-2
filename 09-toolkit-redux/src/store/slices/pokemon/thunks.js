// dispatch -> hacer el dispatch de otra acción 
// getState -> obtener todo el rootState 

import { pokemonApi } from '../../../api/pokemonAPI'
import { setPokemos, startLoadingPokemons } from './pokemonSlice'

export const getPokemos = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons()  )


        // TODO: realizar petición http 
        //const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&coffset=${ page * 10}`)
        //const data = await resp.json(); 
        //console.log(data)

        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10}`)
        console.log(data)

        //dispatch( setPokemos() ); 
        dispatch( setPokemos({ pokemons: data.results, page: page + 1 }))
    }
}