import { Routes, Route } from "react-router-dom";
import { HabitIndex } from "../pages/Index";
import { StatisticsContainer } from "../pages/StatisticsContainer";
import { TrackerContainer } from "../components/tracker/TrackerContainer";

export const AppRoutes = () => (
  <Routes>
      <Route path="/" element={<HabitIndex />} />
      <Route path="/statistics" element={<StatisticsContainer />} />
      <Route path="/habits" element={<TrackerContainer />} />
      <Route path="*" />
  </Routes>
);
