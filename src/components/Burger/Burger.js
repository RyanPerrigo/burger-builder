import React from 'react';

import classes from './BurgerIngredient/Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// importing state = ingredients from burger builder into Burger component to handle logic

const burger = (props) => {
    let transformedIngredients = Object.keys
    /* .keys turns object into an array*/ /*passing ingredients into the array and looping through with .map */ (props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) =>{
           return <BurgerIngredient key ={igKey + i} type ={igKey} />;
        } );
    } )
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length ===0) {
        transformedIngredients = <p> Please Choose ingredients to Start your burger</p>
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
           {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );

}

export default burger;