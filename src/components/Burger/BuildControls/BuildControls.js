import React from 'react';
import classes from './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' }
];

const buildControls = (props) => {

    return (
        <div className={classes.BuildControls}>
            {controls.map(control =>
                <BuildControl
                    click={props.click}
                    key={control.type}
                    label={control.label}
                    type={control.type} />
            )}
        </div>
    );
};

export default buildControls;
