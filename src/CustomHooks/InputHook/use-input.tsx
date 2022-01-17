import { Str } from "Config/Util/constants";
import React, { useState } from "react";

export default function useInput(validateValue: (value: string) => boolean) {
    const [value, setValue] = useState(Str.EMPTY);
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(value);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event: any) => setValue(event.target.value);
    const inputBlurHandler = () => setIsTouched(true);
    const setTouched = (isTouched:boolean) => setIsTouched(isTouched);

    return {
        value,
        valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        setTouched
    };
}