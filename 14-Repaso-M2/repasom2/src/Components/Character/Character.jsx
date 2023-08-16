import { NavLink } from "react-router-dom";

const Character = ({id, name, image}) => {

    return (

        <div>
            <NavLink to={`/detail/${id}`}> <h2>{name}</h2> </NavLink>
            <img src={image} alt={name} />
        </div>
    )
}

export default Character;