import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import useAPIData from "./hooks/useAPIData";
import AddItemForm from "./AddItemForm";

function App() {

    const { isLoading: snacksIsLoading, data: snacks, setData: setSnacks } = useAPIData(
      SnackOrBoozeApi.getSnacks
    );
  
    const { isLoading: drinksIsLoading, data: drinks, setData: setDrinks } = useAPIData(
      SnackOrBoozeApi.getDrinks
    );
  
    if (snacksIsLoading || drinksIsLoading) {
      return <p>Loading &hellip;</p>;
    }

    const addItem = async (item, type) => {
      const newItem = await SnackOrBoozeApi.addItem(item, type);
      if (type === "snacks") {
        setSnacks(snacks => [...snacks, newItem]);
      } else {
        setDrinks(drinks => [...drinks, newItem]);
      }
    };

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
            <Route exact path="/snacks/add">
              <AddItemForm addItem={addItem} type="snacks" />
            </Route>
            <Route path="/snacks/:id">
              <MenuItem itemsToSearch={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu type="drinks" items={drinks} title="Drinks" />
            </Route>
            <Route exact path="/drinks/add">
              <AddItemForm addItem={addItem} type="drinks" />
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
