import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { DoughnutChart } from "../components/charts/DoughnutChart";
import { Link } from "react-router-dom";
import { Nav } from "../components/nav/Nav";

export const Statistics = () => {
  const habitEntries = useSelector((state) => state.habits.items);
  const maxDailyEntries = useSelector((state) => state.habits.maxDailyEntries);
  const [completedDays, setCompletedDays] = useState(0);
  const [failedDays, setFailedDays] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [userData, setUserData] = useState({
    labels: ["Healthy eating", "Snacked", "Days remaining"],
    datasets: [
      {
        data: [0, 0, maxDailyEntries],
        backgroundColor: ["#2ecc71", "#e74c3c", "#ecf0f1"],
        borderColor: "#ddd",
        borderWidth: 1,
      },
    ],
  });

  // Chart legend options
  const chartOptions = {
    plugins: {
      legend: {
        position: "bottom",
        boxWidth: 20,
      },
    },
  };

  useEffect(() => {
    // Show streak of completed days
    let streak = 0;
    habitEntries.forEach((entry) => {
      if (entry.completed) {
        streak++;
      } else {
        setMaxStreak((prevMaxStreak) => Math.max(prevMaxStreak, streak));
        streak = 0;
      }
    });

    // Number of completed days
    const completedDaysCount = habitEntries.filter((entry) => entry.completed).length;
    // Number of failed days
    const failedDaysCount = habitEntries.filter((entry) => !entry.completed).length;
    // Update completedDays and failedDays states
    setCompletedDays(completedDaysCount);
    setFailedDays(failedDaysCount);

    setUserData((prevData) => ({
      ...prevData,
      datasets: [
        {
          data: [completedDaysCount, failedDaysCount, maxDailyEntries - completedDaysCount - failedDaysCount],
          backgroundColor: ["#0CE671", "#1F1D55", "#ecf0f1"],
          borderColor: "#ddd",
          borderWidth: 1,
        },
      ],
    }));
  }, [habitEntries, maxDailyEntries]);

  return (
    <>
      <Nav />
      <article>
        <section className="doughnut-chart">
          <DoughnutChart chartData={userData} options={chartOptions} />
        </section>

        <section className="statsSection">
          <h1>Your progress</h1>
          <div className="statsSummary">
            <p>
              {completedDays} days of healthy eating, {failedDays} days failed and {maxDailyEntries - completedDays - failedDays} days remaining.
            </p>
          </div>

          <p>Streak of successful days: <b>{maxStreak}</b></p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link to="/habits">
            <button 
            className="mainBtn"
            aria-label="Add daily habit entry"
            >Make an entry
            </button>
          </Link>
        </section>
      </article>
    </>
  );
};
