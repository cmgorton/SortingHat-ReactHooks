import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Sorting from "./Sorting";

function AppRouter() {
  return (
    <Router>
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/sorting">Sorting</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/sorting" component={Sorting} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
