import { useSelector, useDispatch } from "react-redux";
import { LottieCheckComponent, LottieXComponent, LottieFoodComponent } from "../components/LottieAnimations/LottieConsolidated";
import { habitsList, setHabitCompleted } from "../reducers/habitSlice";
import { TrackerItem } from "../components/tracker/TrackerItem";
import { Complete } from "./Complete";
import { HabitEntryForm } from "../components/form/HabitEntryForm";



export const Tracker = () => {
  const dispatch = useDispatch();
  const habitEntries = useSelector(habitsList);
  const maxDailyEntries = useSelector((state) => state.habits.maxDailyEntries);
  const habitCompleted = useSelector((state) => state.habits.habitCompleted);

  // Count of total tasks
  const totalEntriesCount = habitEntries.length;

  // Move to completed page after maxDailyEntries value
  if (totalEntriesCount >= maxDailyEntries && !habitCompleted) {
    dispatch(setHabitCompleted(true))
    return <Complete />
  }

 // Reformat current date to yy/mmYdd
 const currentDate = new Date().toISOString().split("T")[0];

 // Checking if there already is a daily habit entry
 const hasTodaysEntry = habitEntries.some(entry => entry.date === currentDate)

 // Only show form if there isn't already a daily entry 
const showForm = () => {
  if (!hasTodaysEntry === true) {
    return <HabitEntryForm />
    
  } else {
    return (
      
    <p className="summary">Looks like you are up to date on your entries</p>
        
    )
  }
}

  // Test value to render Lottie, make dynamic
  // if habitEntries.items.completed === true
  const status = "notFilled";

  return (
    <section className="contentWrapper">
      <figure>
        <LottieFoodComponent />
        {/*status =="filled" ? <LottieCheckComponent /> : status ==="notFilled" ? <LottieXComponent /> : null*/}
      </figure>

      <article className="">
        <h1>Input daily entry</h1>
        <p>You are currently on day  <b>{totalEntriesCount}</b> of <b>{maxDailyEntries}</b>. Keep up the great work! </p>
          
        <section className="tracker">
          <div className="taskList">
            {habitEntries.map((entry) => (
              <TrackerItem key={entry.id} entry={entry} />
            ))}
          </div>
        </section>
        
        {showForm()}
      </article> 
    </section>
  )
}