import { useState } from 'react'
import { BrowserRouter} from "react-router-dom";
import { routes } from "./routes/Routes"
import { Statistics } from "./pages/Statistics"
import './App.css'

export const App = () => {

  return (
    <div>
      {/*<BrowserRouter>
        {routes}
      </BrowserRouter>*/}
  <Statistics />
    </div>
  )
};
