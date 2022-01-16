import React, { Fragment, useContext } from "react";
import "Components/Meals/MealItem/MealItem.scss"
import { ClassName } from "Config/Util/constants"
import MealItemForm from "Components/Meals/MealItemForm/MealItemForm";
import CartContext from "Store/CartContext";

export default function MealItem (props: any) {
    const cartCtx = useContext(CartContext);

    const price = `$${props.meal.price.toFixed(2)}`;

    const addToCartHandler = (amount: number) => {
        const newItem = {
            id: props.meal._id,
            name: props.meal.name,
            amount: amount,
            price: props.meal.price
        };
        cartCtx.addItem(newItem);
    }

    return <li className={ClassName.MEAL}>
        <div>
            <h3>{props.meal.name}</h3>
            <div className={ClassName.DESC}>{props.meal.description}</div>
            <div className={ClassName.PRICE}>{price}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} meal={props.meal}/>
        </div>
    </li>
}