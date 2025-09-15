import styles from "./watchtimechart.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { chartDataI } from "../../types/ChartI";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WatchTimeChart = ({
  info,
  dataset,
  title,
  Xtitle,
  Ytitle,
}: chartDataI) => {
  const labels = info?.map((item) => item.month);

  const data = {
    labels,
    datasets: dataset.map(({ label, color, dataKey }) => ({
      label,
      data: info?.map((item) => item[dataKey]),
      borderColor: color,
      backgroundColor: color,
      tension: 0.4,
      fill: dataKey === "expanded",
    })),
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        align: "end" as const,
        labels: {
          color: "#a0a0ab",
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      title: {
        display: true,
        text: title,
        color: "#a0a0ab",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: Xtitle,
          color: "#a0a0ab",
        },
        ticks: {
          color: "#a0a0ab",
        },
        grid: {
          color: "#c6c6c6c8",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: Ytitle,
          color: "#a0a0ab",
        },
        ticks: {
          color: "#a0a0ab",
        },
        grid: {
          color: "#c4c4c469",
        },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <Line data={data} options={options} />
    </div>
  );
};

export default WatchTimeChart;
