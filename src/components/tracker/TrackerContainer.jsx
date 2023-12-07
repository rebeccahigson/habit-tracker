import { useSelector, useDispatch } from "react-redux";
import { LottieCheckComponent, LottieXComponent, LottieFoodComponent } from "../LottieAnimations/LottieConsolidated";
import { habitsList, setHabitCompleted } from "../../reducers/habitSlice";
import { TrackerItem } from "./TrackerItem";
import { HabitComplete } from "../../pages/HabitComplete";
import { HabitEntryForm } from "../form/HabitEntryForm";


export const TrackerContainer = () => {
  const dispatch = useDispatch();
  const habitEntries = useSelector(habitsList);
  const maxDailyEntries = useSelector((state) => state.habits.maxDailyEntries);
  const habitCompleted = useSelector((state) => state.habits.habitCompleted);

  // Count of total tasks
  const totalEntriesCount = habitEntries.length;
  console.log(`You have this many tasks in total ${totalEntriesCount}`);

  // Move to completed page after 30 days
  if (totalEntriesCount >= maxDailyEntries && !habitCompleted) {
    dispatch(setHabitCompleted(true))
    return <HabitComplete />
  }

 // Reformat current date to yy/mmYdd
 const currentDate = new Date().toISOString().split("T")[0];

 // Checking if there already is a daily habit entry
 const hasTodaysEntry = habitEntries.some(entry => entry.date === currentDate)

  // Test value to render Lottie, make dynamic
  // if habitEntries.items.completed === true
  const status = "filled";

  return (
    <section className="contentWrapper">
      <figure>
        <LottieFoodComponent />
        {/* {status =="filled" ? <LottieCheckComponent /> : status ==="notFilled" ? <LottieXComponent /> : null}*/}
      </figure>

      <div className="">
        <article className="">
          <h1>Input</h1>
          <div className="tracker">
          <div className="taskList">
            {habitEntries.map((entry) => (
              <TrackerItem key={entry.id} entry={entry} />
            ))}
          </div>
          </div>
          <p>You have completed {totalEntriesCount} of {maxDailyEntries} days. </p>

          {/*// Only show form if there isn't already a daily entry 
          {!hasTodaysEntry && <HabitEntryForm />}*/}
          <HabitEntryForm />
        </article>
      </div>
        
    </section>
  )
}