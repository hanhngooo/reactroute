import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" activeStyle={{ fontWeight: "bold" }}>
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>
            About Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/discover" activeStyle={{ fontWeight: "bold" }}>
            Discover Movies Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
