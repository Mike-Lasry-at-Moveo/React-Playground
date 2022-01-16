import React from "react";

export default React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item: any) => {},
    removeItem: (id: any) => {},
    clearCart: () => {},
    isEmpty: () => {}
})