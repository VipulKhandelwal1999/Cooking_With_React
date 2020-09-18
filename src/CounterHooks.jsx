import React, {useState, useContext} from "react";
import {ThemeContext} from "./App";

function CounterHooks(props){

    // const [state, setState] = useState({count: props.initialCount});

    // return(
    //     <>
    //         <button onClick={() => setState({count: state.count-1})}>-</button>
    //         <span>{state.count}</span>
    //         <button onClick={() => setState({count: state.count+1})}>+</button>
    //     </>
    // );
    // if you want to access previous state then we can't use above code as it is asynchronous

    // return(
    //     <>
    //         <button onClick={() => setState(prevState => { return {count: prevState.count-1}})}>-</button>
    //         <span>{state.count}</span>
    //         <button onClick={() => setState(prevState => { return {count: prevState.count+1}})}>+</button>
    //     </>
    // );

    //we can also use one variable
    const [count, setCount] = useState(props.initialCount);
    const style = useContext(ThemeContext);

    return(
        <>
            <button style={style} onClick={() => setCount(prevState => prevState - 1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick={() => setCount(prevState => prevState + 1)}>+</button>
        </>
    );
}

export default CounterHooks;