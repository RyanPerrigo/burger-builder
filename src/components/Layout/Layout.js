import React, {Component} from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer'

import classes from './Layout.module.css';

class Layout extends Component {
state ={
    showSideDrawer: false
}
    DrawerToggleClickedHandler = () => {
        this.setState((prevState) => {
            return{
            showSideDrawer: !prevState.showSideDrawer}
        } );
    }

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }



    render () {
        return (  
            <>
            <Toolbar
            drawerToggleClicked={this.DrawerToggleClickedHandler}/>
            <SideDrawer
            open={this.state.showSideDrawer} 
            closed={this.SideDrawerClosedHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
        </>
        )
    }};
      


export default Layout;