
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
    </section>
  )
}
