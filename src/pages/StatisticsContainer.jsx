
import { useState } from "react";
import { DoughnutChart } from "../components/charts/DoughnutChart";
import { UserData } from "../UserData" ;
import Lottie from "lottie-react";
import { LottieCalendarComponent, LottieCheckComponent, LottieTrophyComponent, LottieXComponent } from "../components/LottieAnimations/LottieConsolidated";

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
    <section>
        Statistics
        <div className="doughnut-chart">
          <DoughnutChart  chartData={userData}/>
        </div>
        
        <LottieCheckComponent />
        <LottieTrophyComponent />
        <LottieXComponent />
    </section>
  )
}
