import { LottieCheckComponent, LottieXComponent } from "../components/LottieAnimations/LottieConsolidated";
import { TrackerInput } from "../components/tracker/TrackerInput";
import { TrackerItem } from "../components/tracker/TrackerItem";
import { Modal } from "../components/modal/Modal";
import { openModal } from "../reducers/modalSlice";
import { useDispatch } from "react-redux";

export const HabitContainer = () => {
  const dispatch = useDispatch();

  // Test value to render Lottie
  const status = "notFilled";

  return (
    <section>
        <figure>
          {status =="filled" ? <LottieCheckComponent /> : status ==="notFilled" ? <LottieXComponent /> : null}
        </figure>

        <h1>Habit title</h1>
        <p>You have x days left of 30. You got this!</p>

        <div className="tracker">
          {/*Filter after Id
          map over items */}

            <div className="tracker-day col-green"></div>
            <button 
            className="modalBtn"
            onClick={() => {
              dispatch(openModal());
            }}>
              <div className="tracker-day col-lightGrey"></div>
            </button>
        </div>
    </section>
  )
}
