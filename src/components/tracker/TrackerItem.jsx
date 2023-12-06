import { LottieCheckComponent, LottieXComponent } from "../LottieAnimations/LottieConsolidated";
import "./Tracker.css";


export const TrackerItem = ({ entry }) => {
  
  return (
    <>
      <div key={entry.id} className={`trackerItem ${entry.completed !== true ? "col-red" : "col-green"}`}
      >     
      <div className="checkContainer"></div>
      </div>
    </>
  );
};
