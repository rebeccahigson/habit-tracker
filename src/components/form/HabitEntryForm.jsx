import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addEntry, habitsList } from "../../reducers/habitSlice";

export const HabitEntryForm = () => {
  const dispatch = useDispatch();
  const habitEntries = useSelector(habitsList);
  const [isComplete, setIsComplete] = useState(false);
  const [isNotComplete, setIsNotComplete] = useState(false);

  // Add entry with completed property
  const handleAddEntry = () => {
  const getNextIndex = () => habitEntries.length + 1;

    // Reformat current date to yy/mm/dd
    const currentDate = new Date().toISOString().split("T")[0];

    const completedValue = isComplete ? true : isNotComplete ? false : undefined;
    
    // 
    if (completedValue !== undefined) {
      dispatch(addEntry({ id: getNextIndex(), completed: completedValue, date: currentDate }));
      setIsComplete(false);
      setIsNotComplete(false);
    }
  };

  return (
    <form>
      <div>
        <label>
          <input
            type="radio"
            checked={isComplete}
            onChange={() => {
              setIsComplete(!isComplete);
              setIsNotComplete(false);}}
          />
          Completed
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            checked={isNotComplete}
            onChange={() => {
              setIsNotComplete(!isNotComplete);
              setIsComplete(false);}}
              />
          Not Completed
        </label>
      </div>

      <button
        className="mainBtn"
        onClick={handleAddEntry}
        
      >
        Add entry
      </button>
    </form>
  );
};
