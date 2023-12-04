import { createSlice } from "@reduxjs/toolkit";

const habitData =[
    {
        id: 1,
        name: 'Exercise',
        progress: Array(30).fill(false), // 30 days tracking, initially set to false
      },
      {
        id: 2,
        name: 'Food',
        progress: Array(30).fill(false),
      },
      {
        id: 3,
        name: 'Sleep',
        progress: Array(30).fill(false),
      },
]

const initialState = {
    habits: [
        {
          id: 1,
          name: 'Exercise',
          progress: Array(30).fill(false), // 30 days tracking, initially set to false
        },
        {
          id: 2,
          name: 'Food',
          progress: Array(30).fill(false),
        },
        {
          id: 3,
          name: 'Sleep',
          progress: Array(30).fill(false),
        },
      ],
};

export const habitSlice = createSlice({
name: "habits", 
initialState,
reducers: {
    addHabit: () => {

    },
    // add habit completion status
    // if habit id =< 30 add new habit entry, else show completion page with restart button 
    // Push to array
    dailyTrack: () => {

    },

    reset: () => {

    },
    // reset habit after 30 days
    /* ??
    restart: () => {
      return initialState;
    }
    */

    // persist state between localhost sessions

    
}

})

export const { addHabit, reset, dailyTrack } = habitSlice.actions;
export const habitList = (state) => state.habits.habits;
export default habitSlice.reducer;