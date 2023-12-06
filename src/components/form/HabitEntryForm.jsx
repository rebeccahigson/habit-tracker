import { useDispatch } from "react-redux";
import { useState } from "react";
import { addEntry } from "../../reducers/habitSlice";

export const HabitEntryForm = () => {
  const dispatch = useDispatch();
  const [isComplete, setIsComplete] = useState(false);
  const [isNotComplete, setIsNotComplete] = useState(false);

  // Add entry with completed property
  const handleAddEntry = () => {
    const completedValue = isComplete ? true : isNotComplete ? false : undefined;
    
    if (completedValue !== undefined) {
      dispatch(addEntry({ id: Date.now(), completed: completedValue }));
      setIsComplete(false);
      setIsNotComplete(false);
    }
  };

  return (
    <form>
      <label>
        <input
          type="radio"
          checked={isComplete}
          onChange={() => {
            setIsComplete(!isComplete);
            setIsNotComplete(false);
          }}
        />
        Completed
      </label>

      <label>
        <input
          type="radio"
          checked={isNotComplete}
          onChange={() => {
            setIsNotComplete(!isNotComplete);
            setIsComplete(false);
          }}
        />
        Not Completed
      </label>

      <button
        className="mainBtn"
        onClick={handleAddEntry}
        disabled={!isComplete && !isNotComplete}
      >
        Add entry
      </button>
    </form>
  );
};
