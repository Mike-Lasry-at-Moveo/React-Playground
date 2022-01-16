import React, { Fragment, useRef, useState } from "react";
import "Components/Cart/Checkout/Checkout.scss";
import { ClassName, Fields, InputType, Str } from "Config/Util/constants";
import useInput from "CustomHooks/InputHook/use-input";

const isEmpty = (value: string) => value.trim() === Str.EMPTY;
const isFiveChars = (value: string) => value.trim().length === 5;

export default function Checkout(props: any) {
    
    // Input Hooks
    
    const {
        value: nameValue,
        valueIsValid: nameValid,
        hasError: nameErr,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        setTouched: setNameTouched,
    } = useInput((value) => !isEmpty(value));

    const {
        value: streetValue,
        valueIsValid: streetValid,
        hasError: streetErr,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        setTouched: setStreetTouched,
    } = useInput((value) => !isEmpty(value));

    const {
        value: postalCodeValue,
        valueIsValid: postalCodeValid,
        hasError: postalCodeErr,
        valueChangeHandler: postalCodeChangeHandler,
        inputBlurHandler: postalCodeBlurHandler,
        setTouched: setPostalCodeTouched,
    } = useInput(isFiveChars);
    
    const {
        value: cityValue,
        valueIsValid: cityValid,
        hasError: cityErr,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        setTouched: setCityTouched,
    } = useInput((value) => !isEmpty(value));

    // Functional Components' Classes

    const nameClasses = `${ClassName.CONTROL}  ${nameErr ? ClassName.INVALID : Str.EMPTY}`;
    const streetClasses = `${ClassName.CONTROL}  ${streetErr ? ClassName.INVALID : Str.EMPTY}`;
    const postalCodeClasses = `${ClassName.CONTROL}  ${postalCodeErr ? ClassName.INVALID : Str.EMPTY}`;
    const cityClasses = `${ClassName.CONTROL}  ${cityErr ? ClassName.INVALID : Str.EMPTY}`;
        
    // Util functions

    const getUserDetails = () => {
        return {
            name: nameValue,
            street: streetValue,
            postalCode: postalCodeValue,
            city: cityValue
        };
    }

    const setFormTouched = (isTouched: boolean) => {
        setNameTouched(isTouched);
        setStreetTouched(isTouched);
        setPostalCodeTouched(isTouched);
        setCityTouched(isTouched);
    }

    const isFormValid = () => {
        return nameValid && streetValid && postalCodeValid && cityValid;
    }

    const confirmHandler = (event: any) => {
        event.preventDefault();
        isFormValid() ? 
            props.onConfirm(getUserDetails()) 
                : setFormTouched(true);
    }
    
    return <form onSubmit={confirmHandler} className={ClassName.FORM}>
        <div className={nameClasses}>
            <label htmlFor={Str.NAME}>Your Name</label>
            <input id={Str.NAME}
                type={InputType.TEXT} 
                value={nameValue} 
                onChange={nameChangeHandler} 
                onBlur={nameBlurHandler} 
            /> {nameErr && <p>Please enter a valid name.</p>}
        </div>
        <div className={streetClasses}>
            <label htmlFor={Str.STREET}>Your Street</label>
            <input id={Str.STREET}
                type={InputType.TEXT} 
                value={streetValue} 
                onChange={streetChangeHandler} 
                onBlur={streetBlurHandler} 
            /> {streetErr && <p>Please enter a valid street.</p>}
        </div>
        <div className={postalCodeClasses}>
            <label htmlFor={Str.POSTAL_CODE}>Postal Code</label>
            <input  id={Str.POSTAL_CODE}
                type={InputType.TEXT} 
                value={postalCodeValue} 
                onChange={postalCodeChangeHandler} 
                onBlur={postalCodeBlurHandler} 
            /> {postalCodeErr && <p>Please enter a valid postal code.</p>}
        </div>
        <div className={cityClasses}>
            <label htmlFor={Str.CITY}>City</label>
            <input id={Str.CITY}
                type={InputType.TEXT} 
                value={cityValue} 
                onChange={cityChangeHandler} 
                onBlur={cityBlurHandler} 
            /> {cityErr && <p>Please enter a valid city.</p>}
        </div>
        <div className={ClassName.ACTS}>
            <button onClick={props.onCancel} type={InputType.BTN}>Cancel</button>
            <button className={InputType.SUB} type={InputType.SUB}>Confimr</button>
        </div>
    </form>;
}