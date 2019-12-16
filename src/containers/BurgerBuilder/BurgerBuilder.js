import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import classes from './BurgerBuilder.css';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.8,
    meat: 1.5,
    bacon: 1
};

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
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
    };

    updatePurchaseState = (ingredients) => {
        const amount = Object.values(ingredients).reduce((total, current) => {
            return total + current;
        }, 0);
        this.setState({
            purchaseable: amount > 0
        });
    };

    onPurchase = () => {
        this.setState({
            purchasing: true
        });
    };

    onModalClosed = () => {
        this.setState({
            purchasing: false
        })
    };

    onPurchaseContinue = () => {
        alert('Continue');
    };

    onIngredientChange = (type, diff) => {
        let ingredients = {...this.state.ingredients};
        let price = this.state.totalPrice;
        if ((ingredients[type] + diff) >= 0) {
            ingredients[type] = ingredients[type] + diff;
            price += INGREDIENT_PRICES[type] * diff;
        }

        this.setState({
            ingredients,
            totalPrice: parseFloat(price.toFixed(2))
        });
        this.updatePurchaseState(ingredients);
    };


    render() {
        const disabledInfo = {
          ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.onModalClosed}>
                    <OrderSummary
                        continue={this.onPurchaseContinue}
                        modalClosed={this.onModalClosed}
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <p className={classes.Price}>Price: {this.state.totalPrice}$</p>
                <BuildControls
                    onPurchase={this.onPurchase}
                    click={this.onIngredientChange}
                    disabledInfo={disabledInfo}
                    purchaseable={this.state.purchaseable}
                />
            </Auxiliary>
        );
    }

}

export default BurgerBuilder;
