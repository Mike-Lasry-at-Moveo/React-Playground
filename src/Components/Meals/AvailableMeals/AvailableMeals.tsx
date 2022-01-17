import React, { Fragment, useEffect, useMemo, useState } from "react";
import "Components/Meals/AvailableMeals/AvailableMeals.scss";
import { Meals } from "Assets/Data/meals";
import { ClassName, Errors } from "Config/Util/constants";
import Card from "Components/UI/Card/Card";
import MealItem from "Components/Meals/MealItem/MealItem";
import axios from "axios";

interface IMeal {
    _id: any,
    name: string,
    description: string
    price: number
}

export default function AvailableMeals () {
    const [meals, setMeals] = useState([] as IMeal[]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState<any>(null);

    const mealsList = meals.map(meal => <MealItem id={meal._id} key={meal._id} meal={meal}/>)

    const fetchMeals = async () => {
        let responseWrapper = await axios.get("http://127.0.0.1:3500/api/meals");
        let response = (responseWrapper.data);
        if(!response.success) throw new Error(Errors.ERR);            
        setMeals(response.data);        
    }; 

    useEffect( () => {
        setIsLoading(true);
        fetchMeals()
        .catch((error: any) => {
            setHttpError(error)
        }).finally(() => setIsLoading(false)); 
    }, []);

    const loadingView = <h1 className={ClassName.MEALS_LOADER}>Loading...</h1>;
    const errorView = <section className={ClassName.MEALS_ERR}><h1>{httpError?.message}</h1></section>;
    const allMeals = <section className={ClassName.ALL_MEALS}><Card><ul>{mealsList}</ul></Card></section>;

    const Content = () => {
        if(isLoading) return loadingView;
        if(httpError) return errorView;
        return allMeals;
    };

    return <Fragment><Content/></Fragment>;
}