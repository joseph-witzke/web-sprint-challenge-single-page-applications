import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom';

//Components imports
import Home from './Home';

const App = () => {
  return (
    <div className='App'>
      <nav>
        <h1 className='shop-header'>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
      </nav>
      <Home />
    </div>
  );
};
export default App;
