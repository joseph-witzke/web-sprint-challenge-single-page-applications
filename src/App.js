import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';

//Components imports
import Home from './Home';
import OrderForm from './OrderForm';

const App = () => {
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
