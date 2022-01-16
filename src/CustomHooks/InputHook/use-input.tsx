import { Str } from "Config/Util/constants";
import React, { useState } from "react";

export default function useInput(validateValue: (value: string) => boolean) {
    const [enteredValue, setEnteredValue] = useState(Str.EMPTY);
    const [isTouched, setIsTouched] = useState(false);

    // const isValid = enteredValue.trim() !== Str.EMPTY;
    const isValid = validateValue(enteredValue);
    const hasError = !isValid && isTouched;

    const valueChangeHandler = (event: any) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = (event: any) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue(Str.EMPTY);
        setIsTouched(false);
    };

    const setTouched = (isTouched:boolean) => {
        setIsTouched(isTouched)
    };

    return {
        value: enteredValue,
        valueIsValid: isValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        setTouched,
        reset
    };
}