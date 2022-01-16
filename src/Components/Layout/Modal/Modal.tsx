import React, { Fragment } from "react";
import "Components/Layout/Modal/Modal.scss"
import { ClassName } from "Config/Util/constants";
import ReactDOM from "react-dom";

const Backdrop = (props: any) => {
    return <div className={ClassName.BCK_DRP} onClick={props.onClose}/>
};

const ModalOverlay = (props: any) => {
    return <div className={ClassName.MODAL}>
        <div className={ClassName.CONTENT}>{props.children}</div>
    </div>
};

export default function Modal (props: any) {
    const portalElement = document.getElementById(ClassName.OVERLAYS);

        return <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement!)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement!)}
        </Fragment>
    
};