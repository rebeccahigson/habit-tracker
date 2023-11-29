import { Routes, Route, NavLink } from "react-router-dom";
import { HabitIndex } from "../pages/HabitIndex";
import { Statistics } from "../pages/Statistics";

export const routes = () => (
    // ROUTES
    <Routes>
        <Route path="/" element={<HabitIndex />} />
        <Route path="*" />
        <Route path="/statistics" element={<Statistics />} />
    </Routes>
)
