import { GET_CHARACTERS, CLEAN_CHARACTERS } from "./action-types";

const initialState = {

    characters: [],
    characterDetail: {}

}

const reducer = (state= initialState, action) => {

    switch(action.type){
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
            }
        case CLEAN_CHARACTERS:
            return{
                ...state,
                characters: []
            }

        default:
            return {...state}

    }

}

export default reducer;

