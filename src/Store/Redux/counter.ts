import { createSlice } from "@reduxjs/toolkit";
import { StateSlice } from "Config/Util/constants";

const initialState = { counter: 0, showCounter: true };

const name = StateSlice.COUNTER;

const reducers = {
    increment: (state: any) => { state.counter++ },
    decrement: (state: any) => { state.counter-- },
    increase: (state: any, action: any) => { state.counter = state.counter + action.payload.amount },
    toggleConuter: (state: any) => { state.showCounter = !state.showCounter },
}

const sliceOptions = { name, initialState, reducers };
const counterSlice = createSlice(sliceOptions);

export default counterSlice;