import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';

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
          <OrderForm />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
