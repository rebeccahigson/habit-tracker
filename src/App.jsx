import './App.css'
import './components/tracker/tracker.css';
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes/AppRoutes";
import { Nav } from './components/nav/Nav';

export const App = () => {

  return (
    <BrowserRouter>
      <main className='wrapper'>
        <div className='container'>
          <Nav /> 
          <AppRoutes />
        </div>
      </main>
    
    </BrowserRouter>
  )
};