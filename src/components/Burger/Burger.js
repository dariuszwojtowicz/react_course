import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ing =>
            [...Array(props.ingredients[ing])].map((_, i) =>
                <BurgerIngredient type={ing} key={ing + i} />
            )
        )
        .reduce((arr, el) => {
            return [...arr, ...el];
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients =  <p>Start Building Your Burger! ;)</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default burger;
