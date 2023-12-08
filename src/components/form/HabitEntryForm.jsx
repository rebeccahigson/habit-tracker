import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addEntry, habitsList } from "../../reducers/habitSlice";
import "./Form.css";

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
    dispatch(addEntry({ 
      id: getNextIndex(), 
      completed: completedValue, 
      date: currentDate 
    })
    );
    setIsComplete(false);
    setIsNotComplete(false);
  }
};

  return (
    <form>
      <p className="bold">How did you do today?</p>
      <div>
        <label className="radioLabel">
          <input
            type="radio"
            checked={isComplete}
            onChange={() => {
              setIsComplete(!isComplete);
              setIsNotComplete(false);}}
          />
          Ate healthy
        </label>
      
        <label className="radioLabel">
          <input
            type="radio"
            checked={isNotComplete}
            onChange={() => {
              setIsNotComplete(!isNotComplete);
              setIsComplete(false);}}
              />
          Snacked...
        </label>
      </div>

      <button
        className="mainBtn"
        onClick={handleAddEntry}
        
      >
        Add daily entry
      </button>
    </form>
  );
};
