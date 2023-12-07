import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = () => (

    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/habits">Healthy eating</NavLink>
        </li>
        <li>
          <NavLink to="/statistics">Statistics</NavLink>
        </li>
      </ul>
    </nav>

);
