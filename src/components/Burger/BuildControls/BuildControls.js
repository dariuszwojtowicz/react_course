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
                    disabled={props.disabledInfo[control.type]}
                    key={control.type}
                    label={control.label}
                    type={control.type} />
            )}
            <button
                disabled={!props.purchaseable}
                className={classes.OrderButton}
                onClick={props.onPurchase}
            >ORDER NOW</button>
        </div>
    );
};

export default buildControls;
