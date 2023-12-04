
import { useState } from "react";
import { DoughnutChart } from "../components/charts/DoughnutChart";
import { UserData } from "../UserData" ;
import { Link } from "react-router-dom";

//Sum up the value of true, false and calculate how many nulls to get the chart data
//Show day x of 30

export const StatisticsContainer = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "#ecf0f1",
              "rgb(0, 229, 92, 0.8)",
              "rgb(255, 78, 78, 0.8)",
            ],
            borderColor: "#ddd",
            borderWidth: 1,
          },
        ],
    })


  return (
    <article>
      <section>
        <h2>Habit 1</h2>
        <p>x days of 30 completed</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <Link to="/habits">
          <button className="mainBtn">Habit 1</button>
        </Link>

        <div className="doughnut-chart">
          <DoughnutChart chartData={userData}/>
        </div>
      </section>
        
      <section>
        <h2>Habit 2</h2>
        <p>x days of 30 completed</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <Link to="/habits">
          <button className="mainBtn">Habit 2</button>
        </Link>

        <div className="doughnut-chart">
          <DoughnutChart chartData={userData}/>
        </div>
      </section>

      <section>
        <h2>Habit 3</h2>
        <p>x days of 30 completed</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <Link to="/habits">
          <button className="mainBtn">Habit 3</button>
        </Link>

        <div className="doughnut-chart">
          <DoughnutChart chartData={userData}/>
        </div>
      </section>  
    </article>
  )
}
