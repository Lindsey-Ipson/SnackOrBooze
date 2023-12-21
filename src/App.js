import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
// import Menu from "./FoodMenu";
import Menu from "./Menu";
// import Snack from "./FoodItem";
import MenuItem from "./MenuItem";
import useAPIData from "./hooks/useAPIData";

function App() {

    const { isLoading: snacksIsLoading, data: snacks } = useAPIData(
      SnackOrBoozeApi.getSnacks
    );
  
    const { isLoading: drinksIsLoading, data: drinks } = useAPIData(
      SnackOrBoozeApi.getDrinks
    );
  
    if (snacksIsLoading || drinksIsLoading) {
      return <p>Loading &hellip;</p>;
    }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu type="snacks" items={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem itemsToSearch={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu type="drinks" items={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <MenuItem itemsToSearch={drinks} cantFind="/drinks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
