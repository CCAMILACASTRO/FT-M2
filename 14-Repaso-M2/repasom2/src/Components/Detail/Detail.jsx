import { useParams } from 'react-router-dom';
import { getCharacterDetail, cleanDetail } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const Detail = () => {

    const dispatch = useDispatch();

    const characterDetail = useSelector( state => state.characterDetail)

    const { id } = useParams()

    useEffect(() => { // Cuando se monte el componente que muestre al personaje que corresponde a ese id
        dispatch(getCharacterDetail(id))
        return () => dispatch(cleanDetail())
    }, [id]) //Queda atento al id para despachar al personaje correspondiente.

    return (

        <div>
            <h1>{characterDetail.name}</h1>
            <img src={characterDetail.image} alt={characterDetail.name} />
        </div>
    )
}

export default Detail;