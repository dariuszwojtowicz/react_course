import React, { Component } from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  render() {
    return getIngredient(this.props.type);
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;


function getIngredient(type) {
  switch (type) {
    case ('bread-bottom'):
      return <div className={classes.BreadBottom}></div>;
    case ('bread-top'):
      return (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}/>
          <div className={classes.Seeds2}/>
        </div>
      );
    case ('meat'):
      return <div className={classes.Meat}></div>;
    case ('cheese'):
      return <div className={classes.Cheese}></div>;
    case ('salad'):
      return <div className={classes.Salad}></div>;
    case ('bacon'):
      return <div className={classes.Bacon}></div>;
    default:
      return <p>Bad Ingriedient Type!</p>;
  }
}
