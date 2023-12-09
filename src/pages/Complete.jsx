import { LottieTrophyComponent } from "../components/LottieAnimations/LottieConsolidated";
import { reset } from "../reducers/habitSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./HabitTracker.css";


export const Complete = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <article>
      <figure className="extra-padding">
        <LottieTrophyComponent />
      </figure>
      
      <section>
        <h1>Habit completed!</h1>
        <p>Great job, you completed the 30 days!</p>

        <Link to="/">
          <button 
          className="mainBtn"
          onClick={handleReset}
          aria-label="Start another habit">
            Reset habit entries
          </button>
        </Link>
        </section>
    </article>
  );
};
