import { Link } from "react-router-dom";
import { LottieCalendarComponent } from "../components/LottieAnimations/LottieConsolidated";
import "./HabitTracker.css";

export const Index = () => {

  return (
    <article className="index">
      <figure>
        <LottieCalendarComponent />
      </figure>

      <section>
        <h1>Track your eating habits</h1>
        <p>On average, it takes more than 2 months before a new behavior becomes automatic — 66 days to be exact. But lets take a first step and make it through <span className="bold">30 days of healthy eating</span>!</p>

        <Link to="/habits">
          <button 
          className="mainBtn"
          aria-label="Start tracking!"
          >
            Start tracking!
          </button>
        </Link>
      </section>
    </article>
  );
};