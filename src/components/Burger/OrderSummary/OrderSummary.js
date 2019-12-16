import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(ing =>
            <li key={ing}><span style={{textTransform: 'capitalize'}}>{ing}</span>: {props.ingredients[ing]} pieces</li>
        );

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Price: {props.price}$</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.modalClosed} buttonType='Danger'>CANCEL</Button>
            <Button clicked={props.continue} buttonType='Success'>CONTINUE</Button>
        </Auxiliary>
    );
};

export default orderSummary;
