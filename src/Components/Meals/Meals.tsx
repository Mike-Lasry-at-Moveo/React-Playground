import React, { Fragment } from "react";
import "Components/Meals/Meals.scss";
import MealsSummary from "./MealsSummary/MealsSummary";
import AvailableMeals from "./AvailableMeals/AvailableMeals";

export default function Meals () {
    return <Fragment>
        <MealsSummary/>
        <AvailableMeals />
    </Fragment>
}