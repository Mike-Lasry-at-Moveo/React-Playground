import { Actions } from "Config/Util/constants";
import { useReducer } from "react";
import CartContext from "Store/Context/CartContext";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state: any, action: any) => {
    let existingCartItemIndex: number;
    let updatedTotalAmount: number;
    
    let existingItem: any;
    let updatedItems: any;
    let updatedItem: any;


    switch(action.type){
        case Actions.ADD:
            updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
            existingCartItemIndex = state.items.findIndex((item:any) => item.id == action.item.id);
            existingItem = state.items[existingCartItemIndex];
            
            if(existingItem) {
                updatedItem = {
                    ...existingItem,
                    amount: existingItem.amount + action.item.amount
                }
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else updatedItems = state.items.concat(action.item)

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };

        case Actions.REMOVE:
            existingCartItemIndex = state.items.findIndex(
                (item: any) =>  item.id === action.id
            );

            existingItem = state.items[existingCartItemIndex]
            updatedTotalAmount = state.totalAmount - existingItem.price;
            
            let remove: boolean = existingItem.amount === 1;
            if(remove) updatedItems = state.items.filter((item :any) => item.id !== action.id)
            else {
                updatedItem = {...existingItem, amount: existingItem.amount - 1};
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }
            
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            };

        case Actions.CLEAR: return defaultCartState;
        default: return defaultCartState;
    }

}

export default function CartProvider (props:any) {
    
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    
    const addItemToCartHandler = (item: any) => {
        dispatchCartAction({type: Actions.ADD, item: item})
    }

    const removeItemFromCartHandler = (id: any) => {
        dispatchCartAction({type: Actions.REMOVE, id: id})
    }

    const clearCartHandler = () => {
        dispatchCartAction({type: Actions.CLEAR})
    }

    const cartIsEmptyHandler = () => {
        return cartState.items.length === 0;
    }

    const cartContext = {
        items: cartState!.items,
        totalAmount: cartState!.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler,
        isEmpty: cartIsEmptyHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};