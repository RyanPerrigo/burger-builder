import React from 'react';
import burgerLogo from '../../Assets/Images/burger-Logo.png';
import classes from './Logo.module.css';

const logo =(props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="Good Burger"/>
    </div>
);

export default logo;