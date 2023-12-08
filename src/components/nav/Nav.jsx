import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = () => (

    <nav>
      <ul>
          <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/habits">Tracker</NavLink>
        </li>
        <li>
          <NavLink to="/statistics">Progress</NavLink>
        </li>
      </ul>
    </nav>

);
