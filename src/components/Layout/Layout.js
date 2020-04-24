import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Auxil from '../../HOC/Auxil';
import SideDrawer from '../Navigation/Sidedrawer/SideDrawer'

import classes from './Layout.module.css';

const layout = ( props ) => (
    <Auxil>
        <div>
            <Toolbar/>
            <SideDrawer/>
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
        
    </Auxil>
    );

export default layout;