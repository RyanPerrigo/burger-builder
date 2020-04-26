import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer'

import classes from './Layout.module.css';

class Layout extends Component {
state={
    showSideDrawer: true
}
    
toggleSideDrawerHandler = () => {
    this.setState({showSideDrawer:false});
}
    render () {


        return (

    <>
        <div>
            <Toolbar/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.toggleSideDrawerHandler}/>
        </div>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        
        </>
        )
    };
};
    
    


export default Layout;