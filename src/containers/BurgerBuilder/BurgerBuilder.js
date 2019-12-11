import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// import BurgerControls from '../../components/BurgerControls/BurgerControls';

class BurgerBuilder extends Component {

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //
    //   }
    // }

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    };

    onIngredientChange = (type, diff) => {
        let ingredients = {...this.state.ingredients};
        if ((ingredients[type] + diff) >= 0) {
            ingredients[type] = ingredients[type] + diff;
        }
        this.setState({
            ingredients
        });
    };


    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls click={this.onIngredientChange}/>
            </Auxiliary>
        );
    }

}

export default BurgerBuilder;
