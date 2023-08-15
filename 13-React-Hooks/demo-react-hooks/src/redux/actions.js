import { GET_CHARACTERS, CLEAN_CHARACTERS } from "./action-types";

export const getCharacters = () => { //Con esta action nos traemos todos los personajes de la API de rick and morty.
    return function(dispatch) {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => dispatch( { type: GET_CHARACTERS, payload: data.results } ) ) 
    }                               //data.results porque necesito el array de characters y no el objeto completo.
}

export const cleanCharacters = () => {
    return {
        type: CLEAN_CHARACTERS }
}