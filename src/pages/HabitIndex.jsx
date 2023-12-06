import { Link } from "react-router-dom";
import { LottieCalendarComponent, LottieCheckComponent, LottieTrophyComponent, LottieXComponent } from "../components/LottieAnimations/LottieConsolidated";
import "../components/tracker/tracker.css";

export const HabitIndex = () => {
//Lottie animation
//Buttons to select habit to track
//Start button
// Useparams to render habit related to ID
// add checked="" to input after logic is set up

  return (
    <article>
      <figure>
        <LottieCalendarComponent />
      </figure>
      
      <h1>Track your habits</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <form>
        <input
        type="checkbox"
        name="habit"
        onChange={() => {console.log("Chosen habit 1 to start")}}
        className="setHabitBtn" />
        <label
        for="habit">
          Habit 1
        </label> 

        <input
        name="timeFrame"
        type="text"
        />
        <label
        for="timeFrame">
          Time frame
        </label> 

        
        <Link to="/habits">
          <button 
          className="addButton"
          onClick={() => {console.log("Start habits")}}>
            Start
          </button>
        </Link>
      </form>

      
    </article>
  )
}
