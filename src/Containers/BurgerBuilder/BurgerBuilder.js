import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';


import Auxil from '../../HOC/Auxil';

class BurgerBuilder extends Component {
    //can call or use constructor to initialize state but will use more later... less modern
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }

    state = {
        ig: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render () {
        return(
            <Auxil>
                <Burger ingredients={this.state.ig}/>
                <div>Build Controls</div>

            </Auxil>
        );
    }
}


export default BurgerBuilder;