import React from "react";
import "./App.css";
import Card from "./Componentes/Card.js";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
 

  return (
    <BrowserRouter>
      <div className="elegir">Elegí  una Card</div>
      <Link className="link-1" to="/Card/0">
        Card 1
      </Link>
      <Link className="link-1" to="/Card/1">
        Card 2
      </Link>
      <Link className="link-1" to="/Card/2">
        Card 3
      </Link>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/Card/:id">
          <Card
          ></Card>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
