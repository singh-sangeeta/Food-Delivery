import React from 'react';
import { Switch, Route } from "react-router-dom";
import Contact from './Components/contact';
import Home from './Components/home page';
import Order from './Components/order';
import Restaurant from './Components/restaurant';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Restaurant" component={Restaurant} />
        <Route exact path="/Order" component={Order} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
