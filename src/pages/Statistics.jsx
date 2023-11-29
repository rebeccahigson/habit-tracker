
import { useState } from "react";
import { DoughnutChart } from "../components/DoughnutChart";
import { UserData } from "../UserData" ;
import Lottie from "lottie-react";
import { LottieConsolidated, LottieCalendarComponent, LottieCheckComponent, LottieTrophyComponent, LottieXComponent  } from "../components/LottieAnimations/LottieConsolidated";

//Sum up the value of true, false and calculate how many nulls to get the chart data
//Show day x of 30

export const Statistics = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "#ecf0f1",
              "#A1F89F",
              "#F9AEAE",
            ],
            borderColor: "#ddd",
            borderWidth: 1,
          },
        ],
})


  return (
    <section>
        Statistics
        
        <DoughnutChart  chartData={userData}/>
        <LottieCalendarComponent />
        <LottieCheckComponent />
        <LottieTrophyComponent />
        <LottieXComponent />
    </section>
  )
}
