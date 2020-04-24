import React from 'react';
import Auxil from '../../../HOC/Auxil';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map( igKey => {
        return (
        <li key ={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>);
    } );
    
    return (
        <Auxil>
            <h3> Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:{props.price}</strong></p>
            <p>Continue to Checkout?</p>
            {/* type gives CSS to buttons
            props defined in Burger builder and passed in */}
            <Button btnType='Success'clicked={props.purchaseContinued}>Continue </Button>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
        </Auxil>
    
    )
};

export default orderSummary