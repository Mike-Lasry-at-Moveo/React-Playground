import React from "react";
import "Components/UI/Counter/Counter.scss";
import { Actions, ClassName } from "Config/Util/constants";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "Store/Redux";

interface IRootState{
    counter: number, 
    showCounter: boolean
}

export default function Counter () {

    const counter = useSelector((state: any) => state.counter.counter);
    const show = useSelector((state: any) => state.counter.showCounter);
    const dispatch = useDispatch();
    
    // Using Redux Toolkit

    // const increaseHandler = (amount: number) => {
    //     dispatch(counterActions.increase({amount}));
    // }
    
    // const incrementHandler = (amount: number) => {
    //     dispatch(counterActions.increment());
    // }
    
    // const decrementHandler = (amount: number) => {
    //     dispatch(counterActions.decrement());
    // }


    // const toggleConuterHandler  = () => {
    //     dispatch(counterActions.toggleConuter());
    // }

    // Using Redux

    const increaseHandler = (amount: number) => {
        dispatch({ type: Actions.INC, amount });
    }
    
    const incrementHandler = (amount: number) => {
        dispatch({ type: Actions.DEC, amount });
    }
    
    const decrementHandler = (amount: number) => {
        dispatch({ type: Actions.DEC, amount });
    }

    const toggleConuterHandler  = () => {
        dispatch({ type: Actions.TOG });
    }

    return <div className={ClassName.COUNTER}>
        <h1>counter</h1>
        { show && <div>{counter}</div> }
        <div>
            <button onClick={() => incrementHandler(1)}>+1</button>
            <button onClick={() => increaseHandler(5)}>+5</button>
            <button onClick={toggleConuterHandler}>Toggle</button>
            <button onClick={() => decrementHandler(1)}>-1</button>
        </div>
    </div>
}