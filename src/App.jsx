import './App.css'
import './components/tracker/tracker.css';
import { HabitIndex } from './pages/HabitIndex';
import { Nav } from './components/nav/Nav';

export const App = () => {

  return (
    <main className='wrapper'>
      <div className='container'>
        <Nav />
        
      </div>
    </main>
  )
};
