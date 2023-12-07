import { BrowserRouter, NavLink } from "react-router-dom";

import "./Nav.css";

export const Nav = () => (

    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/habits">Habits</NavLink>
          {/*useParams with Id ?? */}
        </li>
        <li>
          <NavLink to="/statistics">Statistics</NavLink>
        </li>
      </ul>
    </nav>

);
