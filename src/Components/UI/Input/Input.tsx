import React, { Fragment, Ref } from "react";
import "Components/UI/Input/Input.scss";
import { ClassName } from "Config/Util/constants";

export default React.forwardRef(function Input(props: any, ref: any) {
    return <Fragment>
        <div className={ClassName.INP}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    </Fragment>
})