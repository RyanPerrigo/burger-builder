import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Auxil from '../../HOC/Auxil';

class BurgerBuilder extends Component {
    //can call or use constructor to initialize state but will use more later... less modern
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    
    render () {
        return(
            <Auxil>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>

            </Auxil>
        );
    }
}


export default BurgerBuilder;