import { useSelector } from "react-redux";
import { LottieCheckComponent, LottieXComponent } from "../LottieAnimations/LottieConsolidated";
import { Modal } from "../modal/Modal";
import { habitsList } from "../../reducers/habitSlice";
import { TrackerItem } from "./TrackerItem";
import { HabitComplete } from "../../pages/HabitComplete";
import { Form } from "../form/Form";


export const TrackerContainer = () => {
  const habitEntries = useSelector(habitsList);
  const maxDailyEntries = useSelector((state) => state.habits.maxDailyEntries);

  // Count of total tasks
  const totalEntriesCount = habitEntries.length;
  console.log(`You have this many tasks in total ${totalEntriesCount}`);

  // Move to completed page after 30 days
  if (totalEntriesCount >= maxDailyEntries) {
    return <HabitComplete />
  }

  // Test value to render Lottie, make dynamic
  const status = "notFilled";

  return (
    <section className="contentWrapper">
      <figure>
        {status =="filled" ? <LottieCheckComponent /> : status ==="notFilled" ? <LottieXComponent /> : null}
      </figure>

      <div className="tasksWrapper">
        <article className="toDoContainer">
          <h1>Input</h1>
          <div className="taskList">
            {habitEntries.map((entry) => (
              <TrackerItem key={entry.id} entry={entry} />
            ))}
          </div>

          <p>You have completed {totalEntriesCount} of {maxDailyEntries} days. </p>

          <Form />
        </article>
        </div>
        
    </section>
  )
}