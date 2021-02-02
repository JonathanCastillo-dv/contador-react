import React,{useState} from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({value})=>{

    const [counter,setCounter] = useState(value);

    const handleadd = (e)=>{

        const btnIncrementar= e.target.classList.contains("btn-incrementar");
        const btnDecrementar = e.target.classList.contains("btn-decrementar");
        const btnReiniciar = e.target.classList.contains("btn-Reiniciar");
        
        if(btnIncrementar){
            setCounter(counter + 1);
            return;
        }else if(btnDecrementar){
            setCounter(counter - 1);
            return;
        }else if(btnReiniciar){
            setCounter(value);
            return;
        }
    }

    return (
    <>
    <h1>CounterApp</h1>
    <h2>{counter}</h2>
    <div className="botones">
    <button className="btn-incrementar" onClick={handleadd}>+1</button>
    <button className="btn-Reiniciar" onClick={handleadd}>Reiniciar</button>
    <button className="btn-decrementar" onClick={handleadd}>-1</button>
    </div>
    </>
    );
}

CounterApp.propTypes ={
    value: PropTypes.number.isRequired
};

export default CounterApp;