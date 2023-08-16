import React from 'react';
import {connect} from 'react-redux'
import { getCharacters } from '../../Redux/actions';
import Character from '../Character/Character';

class Characters extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.getCharacters();
    }

    render(){
        return(
            <div>
                <h1>Characters: </h1>
                {
                    this.props.characters.map((char)=>{
                        return(
                            <Character
                            key={char.id}
                            id={char.id}
                            name={char.name}
                            image={char.image}                          
                            />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getCharacters: () => dispatch(getCharacters())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Characters);


// import { getCharacters} from "../../Redux/actions";
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import Character from "../Character/Character";

// const Characters = () => {

//     const dispatch = useDispatch();

//     const characters = useSelector( state => state.characters)

//     useEffect (() => {
//         dispatch(getCharacters())
        
//     }, [])

//     return (

//         <div>
//             <h1>Characters: </h1>
//             {
//                 characters?.map(char => {
//                     return (
//                         <Character
//                             key={char.id}
//                             id={char.id}
//                             name={char.name}
//                             image={char.images}
//                         />
                        
                       
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Characters;

