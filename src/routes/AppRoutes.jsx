import { Routes, Route } from "react-router-dom";
import { Index } from "../pages/Index";
import { Statistics } from "../pages/Statistics";
import { Tracker } from "../pages/Tracker";
import { PageNotFound } from "../pages/PageNotFound";

export const AppRoutes = () => (
  <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/habits" element={<Tracker />} />
      <Route path="*" element={<PageNotFound />} />
  </Routes>
);
