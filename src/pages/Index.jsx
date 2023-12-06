import { Link } from "react-router-dom";
import { LottieCalendarComponent, LottieCheckComponent, LottieTrophyComponent, LottieXComponent } from "../components/LottieAnimations/LottieConsolidated";
import "../components/tracker/tracker.css";
import { addDailyEntriesCount } from "../reducers/habitSlice";
import { useDispatch } from "react-redux";
import "../components/form/Form.css";

export const HabitIndex = () => {
  const dispatch = useDispatch();

  const handleSetDailyEntriesCount = (action, payload) => {
    dispatch(addDailyEntriesCount(action, payload));
  };
//Lottie animation
//Buttons to select habit to track
//Start button
// Useparams to render habit related to ID
// add checked="" to input after logic is set up

  return (
    <article className="content">
      <figure>
        <LottieCalendarComponent />
      </figure>
      
      <h1>Track your habits</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <form>

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
      
        {/* <input
        type="checkbox"
        name="habit"
        onChange={() => {console.log("Chosen habit 1 to start")}}
        className="setHabitBtn" />
        <label
        for="habit">
          Habit 1
        </label> 
      */}

        <label
        for="timeFrame">
          Time frame
        </label> 
        <input
        name="timeFrame"
        type="text"
        />
        

        

        
        <Link to="/habits">
          <button 
          className="mainBtn"
          onClick={() => {console.log("Start habits")}}>
            Start
          </button>
        </Link>
      </form>

      
    </article>
  )
}
