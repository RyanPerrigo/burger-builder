import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer'

import classes from './Layout.module.css';

class Layout extends Component {
state={
    showSideDrawer: false
}
sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
}    
toggleSideDrawerHandler = () => {
    this.setState((prevState) => {
       return {showSideDrawer:!prevState.showSideDrawer}
    });
}
    render () {


        return (

    <>
        <div>
            <Toolbar drawerToggleClicked={this.toggleSideDrawerHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        </div>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        
        </>
        )
    };
};
    
    


export default Layout;