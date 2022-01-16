import React, { Fragment, useRef, useState } from "react";
import "Components/Meals/MealItemForm/MealItemForm.scss";
import { ClassName, InputType, Str } from "Config/Util/constants"
import Input from "Components/UI/Input/Input";

export default function MealItemForm(props: any) {
    
    const amountInputRef = useRef<any>();
    const [amountIsValid, setAmountIsValid] = useState(true);
    const submitHandler = (event: any) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current!.value;
        const enteredAmountNumber = parseInt(enteredAmount);
        
        if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
            return setAmountIsValid(false);
        
            props.onAddToCart(enteredAmountNumber);
    }

    const inputId = `${Str.AMOUNT}${Str.US}${Str.INP}${Str.US}${props.meal.name}`;
    const input = {
        id: inputId.toLowerCase(),
        type: InputType.NUM,
        defaultValue: 1,
        min: 1, 
        max: 5, 
    };
    
    return <Fragment>
        <form onSubmit={submitHandler} className={ClassName.MEAL_ITEM_FORM}>
            <Input ref={amountInputRef} label={Str.AMOUNT} input={input} />
            <button className={ClassName.ADD_TO_CART}>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    </Fragment>
}