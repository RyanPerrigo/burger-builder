import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Model from "../../components/UI/Model/Model";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axiosInstance from "../../AxiosOrders/AxiosOrders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  //can call or use constructor to initialize state but will use more later... less modern
  // constructor(props) {
  //     super(props);
  //     this.state = {...}
  // }

  state = {
    ingredients: {
      bacon: 0,
      salad:0,
      cheese:0,
      meat:0
    },
    totalPrice: 4,
    canBuy: false,
    buying: false,
    loading: false,
  };
  getIngredientHandler = (data) => {
    axiosInstance
      .get("https://burgerbuilder2-26059.firebaseio.com/Ingredients.json")
      .then();
  };
  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ canBuy: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = (props) => {
    return this.setState({ buying: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ buying: false });
  };
  purchaseContinueHandler = () => {
    // alert('You Continue')
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Ryan Perrigo",
        address: {
          street: "123 fake st",
          zipCode: 33073,
          country: "USA",
        },
        email: "stringemail@test.com",
      },
      deliveryMethod: "Immediate",
    };
    axiosInstance
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false, buying: false });
      })
      .catch((error) => {
        this.setState({ loading: false, buying: false });
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.totalPrice.toFixed(2)}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Model
          show={this.state.buying}
          modelClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Model>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          canBuy={this.state.canBuy}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axiosInstance);
