import axios from "axios";
import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';
import * as yup from "yup";
import schema from "./formSchema"

//Components imports
import Home from './Home';
import OrderForm from './OrderForm';

//Shape of state for form
const initialFormValues = {
  name: "",
  size: "",
  cheese: "",
  pepperoni: false,
  mushroom: false,
  ham: false,
  special: "",
};

const initialFormErrors = {
  name: "",
};
const initialOrders = [];
const initialDisabled = true;


const App = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = (newOrder) => {
    axios.post("https://reqres.in/api/orders", newOrder)
    .then((res) => {
      setOrders([...orders, res.data]);
      setFormValues(initialFormValues);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const inputChange = () => {

  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ["cheese, pepperoni, mushroom, ham"].filter(
        (item) => formValues[item]
      ),
      special: formValues.special.trim(),
    };
    postNewOrder(newOrder);
  };

  //Side Effects

  return (
    <div className='App'>
      <nav>
        <h1 className='shop-header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/pizza' id='order-pizza'>Order</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <OrderForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
