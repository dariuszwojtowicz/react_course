import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliary from '../../../hoc/Auxiliary';

const sideDrawer = (props) => {

    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closeSideDrawer} />
            <div className={classes.SideDrawer + ` ${(props.open ? classes.Open : classes.Close)}`}>
                <div style={{height: "11%"}}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
};

export default sideDrawer;
