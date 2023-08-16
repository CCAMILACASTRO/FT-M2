import { NavLink } from 'react-router-dom'

const Landing = () => {

    return(
        <div>
            <h1>HACE CLICK PARA SUMARTE A LA DAIANETA</h1>

            <button>
                <NavLink to='/login'>SUBITE A LA DAIANETA</NavLink>
            </button>

        </div>
    )
}

export default Landing;