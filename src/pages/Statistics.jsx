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

  //Not working
  const chartOptions = {
    legend: {
      position: "right",
    },
  };

  useEffect(() => {
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
          backgroundColor: ["#0CE671", "rgb(255, 78, 78, 0.8)", "#ecf0f1"],
          borderColor: "#ddd",
          borderWidth: 1,
          
        },
      ],
      
    }));

    // if maxDailyEntries  30 days - if 

  }, [habitEntries, maxDailyEntries]);

  return (
    <>
    <Nav /> 
    <article>
      <section className="col-50">
        <div className="doughnut-chart">
          <DoughnutChart chartData={userData} option={chartOptions} />
        </div>
        </section>

        <section className="col-50 statsSection">
        <h2>Healthy eating</h2>
        <div className="statsSummary">
          <p >{completedDays} days of healthy eating, {failedDays} days failed, {maxDailyEntries - completedDays - failedDays} days remaining.</p>
        </div>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <Link to="/habits">
          <button 
          className="mainBtn">
            Make an entry
          </button>
        </Link>
      </section>
    </article>
    </>
  );
};
