import { LottieTrophyComponent } from "../components/LottieAnimations/LottieConsolidated";
import "../components/tracker/tracker.css";

export const HabitComplete = () => {
  //Lottie animation
  //Link to reset completed habit?
  return (
    <article>
      <figure>
        <LottieTrophyComponent />
      </figure>
      
      <h1>Habit completed!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <button 
        className="addButton">
          Start another habit
        </button>
    </article>
  )
}
