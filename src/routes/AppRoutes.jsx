import { Routes, Route } from "react-router-dom";
import { HabitIndex } from "../pages/HabitIndex";
import { StatisticsContainer } from "../pages/StatisticsContainer";
import { HabitContainer } from "../pages/HabitContainer";

export const AppRoutes = () => (
  <Routes>
      <Route path="/" element={<HabitIndex />} />
      <Route path="/statistics" element={<StatisticsContainer />} />
      <Route path="/habits" element={<HabitContainer />} />
      <Route path="*" />
  </Routes>
);
