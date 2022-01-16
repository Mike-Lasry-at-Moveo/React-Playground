import React, { Fragment } from "react";
import "Components/Cart/CartItem/CartItem.scss";
import { ClassName } from "Config/Util/constants";

export default function CartItem (props: any) {
const price = `$${props.price.toFixed(2)}`;

    return <Fragment>
        <li className={ClassName.CART_ITEM}>
            <div>
                <h2>{props.name}</h2>
                <div className={ClassName.SUMMARY}>
                    <span className={ClassName.PRICE}>{price}</span>
                    <span className={ClassName.AMOUNT}>x {props.amount}</span>
                </div>
            </div>
            {/* <h4>{`$${props.price * props.amount}`}</h4> */}
            <div className={ClassName.ACTS}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    </Fragment>
}
