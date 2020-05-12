import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact={true} to="/" activeStyle={{ fontWeight: "bold" }}>
          Home Page
        </NavLink>

        <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>
          About Page
        </NavLink>

        <NavLink to="/discover" activeStyle={{ fontWeight: "bold" }}>
          Discover Movies Page
        </NavLink>
      </nav>

      <Switch>
        <Route path="/discover/:imdbID" component={MovieDetail} />
        <Route exact path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
