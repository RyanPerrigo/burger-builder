import React, {Component} from 'react';

import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    componentDidUpdate () {
        console.log('[OrderSummary] WillUpdate');
    }

    render () { 
    const ingredientSummary = Object.keys(this.props.ingredients).map( igKey => {
        return (
        <li key ={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>);
    } );
    
    return (
        <>
            <h3> Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:{this.props.price}</strong></p>
            <p>Continue to Checkout?</p>
            {/* type gives CSS to buttons
            props defined in Burger builder and passed in */}
            <Button btnType='Success'clicked={this.props.purchaseContinued}>Continue </Button>
            <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
        </>
    
    )}
};

export default OrderSummary