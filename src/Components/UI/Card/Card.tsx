import { ClassName } from "Config/Util/constants";
import React from "react";
import "Components/UI/Card/Card.scss"

export default function Card (props: any) {
    return <div className={ClassName.CARD}>{props.children}</div>
}