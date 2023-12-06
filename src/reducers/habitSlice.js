import { createSlice } from "@reduxjs/toolkit";

const habitData = {
  items: [
    { id: 1, completed: true },
    { id: 2, completed: true },
    { id: 3, completed: false },
    { id: 4, completed: false },
    { id: 5, completed: true },
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
    // Reset habit array
    reset: () => {},
  
  },
});

export const { addEntry, reset } = habitSlice.actions;
export const habitsList = (state) => state.habits.items;
export default habitSlice.reducer;
