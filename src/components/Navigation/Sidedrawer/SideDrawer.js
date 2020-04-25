import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'


const sideDrawer = (props) => {

    return (
        <div className={classes.SideDrawer}>
            
                <Logo/>
            <div >
                <NavigationItems/>
</div>
        </div>

    );
};

export default sideDrawer