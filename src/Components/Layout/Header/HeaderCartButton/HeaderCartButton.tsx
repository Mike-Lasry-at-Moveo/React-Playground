import React, { Fragment, useContext, useEffect, useState } from "react";
import "Components/Layout/Header/HeaderCartButton/HeaderCartButton.scss";
import CartIcon from "./CartIcon/CartIcon";
import { ClassName } from "Config/Util/constants";
import CartContext from "Store/CartContext";

export default React.memo(function HeaderCartButton (props: any) {
    const cartCtx = useContext(CartContext);
    const [btnHighLight, setBtnHighLight] = useState(false);

    const { items } = cartCtx;
    
    const btnClasses = `${ClassName.CART_BTN} ${btnHighLight && ClassName.BUMP}`
    const numberOfCardItems = (cartCtx.items as any[]).reduce((currNumber, items) => {
        return currNumber + items.amount;
    }, 0);

    useEffect(() => {
        if(items.length === 0) return;
        setBtnHighLight(true);

        let timer = setTimeout(() => setBtnHighLight(false), 300);
        return () => clearTimeout(timer);
    }, [items])

    return <button onClick={props.onShowCart} className={btnClasses}>
        <span>
            <CartIcon/>
        </span>
        &nbsp;
        <span>
            Your Cart
        </span>
        &nbsp;
        <span className={ClassName.CART_COUNT}>
            { numberOfCardItems }
        </span>
    </button>
 
});