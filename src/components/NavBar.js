import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink exact to="/directors">Directors</NavLink>
        </li>
        <li>
          <NavLink exact to="/Actors">Actors</NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default NavBar;
