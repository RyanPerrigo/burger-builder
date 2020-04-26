import React from 'react'
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleDrawer from '../Sidedrawer/ToggleSideDrawer';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <ToggleDrawer
        clicked={props.drawerToggleClicked}/>
        <div>
            <Logo height={"40px"}/>
              
        </div>
        <nav className={classes.DesktopOnly}>
        <NavigationItems/>
        </nav>
    </header>
);

export default toolbar