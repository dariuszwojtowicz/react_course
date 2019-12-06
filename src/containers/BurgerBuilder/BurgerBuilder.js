import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
// import BurgerControls from '../../components/BurgerControls/BurgerControls';

class BurgerBuilder extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <Auxiliary>
        <Burger />
        <div>BuildControls</div>
      </Auxiliary>
    );
  }

}

export default BurgerBuilder;
