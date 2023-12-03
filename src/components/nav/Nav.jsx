import { BrowserRouter, NavLink } from "react-router-dom";
import { AppRoutes } from "../../routes/AppRoutes";

export const Nav = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/habits">Habits</NavLink>
        </li>
        <li>
          <NavLink to="/statistics">Statistics</NavLink>
        </li>
      </ul>
    </nav>
    <AppRoutes />
  </BrowserRouter>
);
