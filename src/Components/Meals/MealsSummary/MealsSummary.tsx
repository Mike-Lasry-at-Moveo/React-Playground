import React, { Fragment } from "react";
import "Components/Meals/MealsSummary/MealsSummary.scss";
import { ClassName } from "Config/Util/constants";

export default function MealsSummary () {
    return <Fragment>
        <section className={ClassName.MEALS_SUM}>
            <h2>Delicious Food, DeliveredTo You</h2>
            <p>
                choose your favorite meal from our board selection of available meals and enjoy a delicious lunch or dinner at home
            </p>
            <p>
                All out meals are cooked with high quality ingredients, just in time and of course by experiences chefs!
            </p>
        </section>
    </Fragment>
}