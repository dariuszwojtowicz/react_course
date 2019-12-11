import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {

    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.click.bind(this, props.type, -1)}>Less</button>
            <button className={classes.More} onClick={props.click.bind(this, props.type, 1)}>More</button>
        </div>
    );
};

export default buildControl;
