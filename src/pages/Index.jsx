import { Link } from "react-router-dom";
import { LottieCalendarComponent } from "../components/LottieAnimations/LottieConsolidated";
import "../components/tracker/tracker.css";
import "../components/form/Form.css";


export const Index = () => {



// Buttons to select habit to track
// Start button
// UseParams to render habit related to ID


  return (
    <article className="">
      <figure>
        <LottieCalendarComponent />
      </figure>
      
      <h1>Track your eating habits</h1>
      <p>On average, it takes more than 2 months before a new behavior becomes automatic — 66 days to be exact. But lets take a first step and make it through <span className="bold">30 days of healthy eating</span>!</p>

      <Link to="/habits">
          <button 
          className="mainBtn"
          >
            Start
          </button>
        </Link>

      {/*<form>
      <div className="cat action">
        <label>
          <input 
          type="checkbox" 
          onChange={() => {console.log("Chosen habit 1 to start")}}
          value="1" />
          <span>Healthy eating</span>
        </label>
      </div>

      <div className="cat action">
        <label>
          <input 
          type="checkbox" 
          onChange={() => {console.log("Chosen habit 1 to start")}}
          value="1" />
          <span>Healthy eating</span>
        </label>
      </div>

      <div className="cat action">
        <label>
          <input 
          type="checkbox" 
          onChange={() => {console.log("Chosen habit 1 to start")}}
          value="1" />
          <span>Healthy eating</span>
        </label>
      </div>
      
         <input
        type="checkbox"
        name="habit"
        onChange={() => {console.log("Chosen habit 1 to start")}}
        className="setHabitBtn" />
        <label
        for="habit">
          Habit 1
        </label> 
      

        
      </form>*/}
    </article>
  )
}
