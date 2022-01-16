import { Actions } from "Config/Util/constants";
import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "Store/Redux/counter";
import authSlice from "Store/Redux/auth";

// Using Redux

// const initialState = { counter: 0, showCounter: true };

// const counterReducer = (state: any = initialState,  action: any) => {
//     switch(action.type){
//         case Actions.INC: return { 
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         };
//         case Actions.DEC: return { 
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         };
//         case Actions.RST: return { 
//             counter: 0,
//             showCounter: state.showCounter
//         };
//         case Actions.TOG: return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }; default: return state;
//     }
// }
// const store = createStore(counterReducer);

/* Using Redux Toolkit */

const store = configureStore({
    reducer: { 
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    } 
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;