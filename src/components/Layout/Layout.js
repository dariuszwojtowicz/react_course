import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        sideDrawerOpen: false
    };

    openCloseSideDrawer = () => {
        const sideDrawerOpen = this.state.sideDrawerOpen;
        this.setState({
            sideDrawerOpen: !sideDrawerOpen
        });
    };

    render() {
        return (
            <Auxiliary>
                <Toolbar showSideDrawer={this.openCloseSideDrawer}/>
                <SideDrawer closeSideDrawer={this.openCloseSideDrawer} open={this.state.sideDrawerOpen} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout;
