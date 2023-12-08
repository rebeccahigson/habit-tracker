import { createSlice } from "@reduxjs/toolkit";

const habitData = {
  items: [
    /*{ id: 1, completed: true, date:"2023-12-01" },
    { id: 2, completed: true, date:"2023-12-02" },
    { id: 3, completed: false, date:"2023-12-03" },
    { id: 4, completed: false, date:"2023-12-04" },
    { id: 5, completed: true, date:"2023-12-05" },*/
  ],
  maxDailyEntries: 10,
  habitCompleted: false,
}

export const habitSlice = createSlice({
  name: "habits",
  initialState: habitData,
  reducers: {
    // Add habit entry
    addEntry: (state, action) => {
      state.items.push(action.payload);
    },
    // Set habitCompleted: true
    setHabitCompleted: () => {
    },
    // Reset habit array
    reset: (state) => {
      state.items = [];
    },
  
  },
});

export const { addEntry, reset, addDailyEntriesCount,setHabitCompleted } = habitSlice.actions;
export const selectedHabitList = (state) => state.habits.selectedHabits; 
export const habitsList = (state) => state.habits.items;
export default habitSlice.reducer;
