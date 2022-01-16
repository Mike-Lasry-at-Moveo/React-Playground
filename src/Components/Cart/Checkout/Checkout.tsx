import React, { Fragment, useRef, useState } from "react";
import "Components/Cart/Checkout/Checkout.scss";
import { ClassName, Fields, InputType, Str } from "Config/Util/constants";

const isEmpty = (value: string) => value.trim() === Str.EMPTY;
const isFiveChars = (value: string) => value.trim().length === 5;

export default function Checkout (props: any) {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true,
    });

    const nameInputRef = useRef<any>();
    const streetInputRef = useRef<any>();
    const postalCodeInputRef = useRef<any>();
    const cityInputRef = useRef<any>();
    
    const confirmHandler = (event: any) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
        const enteredCityIsValid = !isEmpty(enteredCity);
        
        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        });

        const formIsValid =  enteredNameIsValid  && enteredStreetIsValid
            && enteredPostalCodeIsValid && enteredCityIsValid;
        
        

        if(!formIsValid){
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        });
    }

    return <Fragment>
        <form onSubmit={confirmHandler} className={ClassName.FORM}>
            <div className={`${ClassName.CONTROL}  ${!formInputsValidity.name ? ClassName.INVALID : Str.EMPTY}`}>
                <label htmlFor={Str.NAME}>Your Name</label>
                <input ref={nameInputRef} type={InputType.TEXT} id={Str.NAME} />
                {!formInputsValidity.name && <p>Please enter a valid name.</p>}
            </div>
            <div className={`${ClassName.CONTROL}  ${!formInputsValidity.street ? ClassName.INVALID : Str.EMPTY}`}>
                <label htmlFor={Str.STREET}>Your Street</label>
                <input ref={streetInputRef} type={InputType.TEXT} id={Str.STREET} />
                {!formInputsValidity.street && <p>Please enter a valid street.</p>}
            </div>
            <div className={`${ClassName.CONTROL}  ${!formInputsValidity.postalCode ? ClassName.INVALID : Str.EMPTY}`}>
                <label htmlFor={Str.POSTAL_CODE}>Postal Code</label>
                <input ref={postalCodeInputRef} type={InputType.TEXT} id={Str.POSTAL_CODE} />
                {!formInputsValidity.postalCode && <p>Please enter a valid postal code.</p>}
            </div>
            <div className={`${ClassName.CONTROL}  ${!formInputsValidity.city ? ClassName.INVALID : Str.EMPTY}`}>
                <label htmlFor={Str.CITY}>City</label>
                <input ref={cityInputRef} type={InputType.TEXT} id={Str.CITY} />
                {!formInputsValidity.city && <p>Please enter a valid city.</p>}
            </div>
            <div className={ClassName.ACTS}>
                <button onClick={props.onCancel} type={InputType.BTN}>Cancel</button>
                <button className={InputType.SUB} type={InputType.SUB}>Confirm</button>
            </div>
        </form>
    </Fragment>
}