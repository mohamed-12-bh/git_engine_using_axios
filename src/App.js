import React from "react";
import Users from "./Components/Users";
import NavBar from "./Components/NavBar";
import UserItem from "./Components/UserItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container my-4">
          <Switch>
            <Route exact path="/users" component={Users} />
            <Route exact path="/users/:id" component={UserItem} />
            <Route exact component={Users} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;
