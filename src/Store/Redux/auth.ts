import { createSlice } from "@reduxjs/toolkit";
import { StateSlice } from "Config/Util/constants";

const initialState = { isAuthenticated: false };

const name = StateSlice.AUTH;

const reducers = {        
    login: (state: any) => { state.isAuthenticated = true },
    logout: (state: any) => { state.isAuthenticated = false }
}



const sliceOptions = { name, initialState, reducers };
const authSlice    = createSlice(sliceOptions);

export default authSlice;