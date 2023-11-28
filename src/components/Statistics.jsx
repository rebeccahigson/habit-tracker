
import { useState } from "react";
import { DoughnutChart } from "./DoughnutChart";
import { UserData } from "../UserData" ;

export const Statistics = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
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
    </section>
  )
}
