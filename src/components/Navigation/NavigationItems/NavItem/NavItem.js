import React from 'react';
import classes from './NavItem.module.css';


const navItem = ( props) => (
    <ul className={classes.NavItem}>
    <li>
        <a 
        href={props.link } className={props.active ? classes.active : null}>
            {props.children}</a>
    </li>
</ul>

);

export default navItem