import { getCharacters, cleanCharacters } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const Characters = () => {

    const dispatch = useDispatch(); //con esto ya podemos despachar

    const characters = useSelector(state => state.characters)
//Este hook recibe un callback y nos permite acceder a las propiedades del estado global que quiera.

//Cuándo queremos que se despache la action? Cuando se monte el componente (ciclo de vida)
    useEffect( () => { 
        dispatch(getCharacters()) //Aca despachamos la action.    
    
        return () => dispatch(cleanCharacters()) //Cuando se desmonta el componente se limpia el estado para que no muestre espacio en memoria.
    }, [])
   

    return(

        <div>
            <h1> Estos son los personajes de Rick and Morty: </h1>
            {
                characters?.map(character => {
                    return (
                        <div key={character.id}>
                            <h3>{character.name}</h3>,
                            <img src={character.image} alt={character.name} />
                        </div>
                    )
                })
            }
        </div>

    )

}

export default Characters;
