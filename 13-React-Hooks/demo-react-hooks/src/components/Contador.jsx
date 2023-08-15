import { useState, useEffect} from 'react';

const Contador = () => {

    const [count, setCount] = useState(0);

    const incrementar = () => {
        setCount(count + 1);
    }

    const decrementar = () => {
        setCount(count - 1);
    }

    useEffect(() => {
        if(count > 5) {
            setCount(0);
        }
        if(count < 0) {
            setCount(0)
        }
    }, [count])

    return (
        <div>

            <h2>CONTADOR: </h2>
            <h3>{count}</h3>
            <button onClick={decrementar}> - </button>
            <button onClick={incrementar}> + </button>

        </div>
    )
}

export default Contador;