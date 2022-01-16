import React, { Fragment } from "react"; 
import "Components/Layout/Header/Header.scss";
import mealsImage from "Assets/Images/meals.png"
import { ClassName, Str } from "Config/Util/constants";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import Counter from "Components/UI/Counter/Counter";

export default function Header (props: any) {
    return <div className={ClassName.TOP_PAGE}>
        <header className={ClassName.HEADER}>
            <HeaderTitle />
            <Counter />
            <HeaderCartButton onShowCart={props.onToggleCart} />
        </header>
        <div>
            <img src={mealsImage} alt={Str.ALT_FOOD_TABLE} className={ClassName.MAIN_IMG}/>
        </div>
    </div>;
}
