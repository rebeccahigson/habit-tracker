import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const DoughnutChart = ({chartData}) => {
  return (
    <>
    {/*<Bar data={chartData}/>*/}
    <Doughnut data={chartData} />
    </>
  )
}
