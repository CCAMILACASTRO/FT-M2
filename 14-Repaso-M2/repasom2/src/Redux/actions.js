import { GET_CHARACTERS, GET_CHARACTER_DETAIL, CLEAN_DETAIL } from "./action-types";
import axios from 'axios';

// FORMA CON FETCH:
export const getCharacters = () => {
    return function(dispatch) {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(response => response.json())
        .then(data => dispatch({ type: GET_CHARACTERS , payload: data.results})) //para acceder al array de objetos.
    }
}

export const getCharacterDetail = (id) => {
    return function(dispatch) {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json() )
        .then(data => dispatch({ type: GET_CHARACTER_DETAIL, payload: data}))
    }
}

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}


/* FORMA 1 CON AXIOS (muy parecida a fetch)
export const getCharacters = () => {
    return function(dispatch){
        axios('https://rickandmortyapi.com/api/character/')
        .then(response => response.data)
        .then(data => dispatch({ type: GET_CHARACTERS, payload: data.results}))
    }
}*/

/* FORMA 2 CON AXIOS (con async y await)
export const getCharacters = () => {
    return async function(dispatch){
        const response = await axios ('https://rickandmortyapi.com/api/character/')
        return dispatch({ type: GET_CHARACTERS, payload: response.data.results}) 
    }
}*/
