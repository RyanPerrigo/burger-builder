import React from 'react';

import classes from './BurgerIngredient/Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// importing state of ingredients from burger builder into Burger component

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) =>{
           return <BurgerIngredient key ={igKey + i} type ={igKey} />;
        });
    });
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
           {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );

}

export default burger;