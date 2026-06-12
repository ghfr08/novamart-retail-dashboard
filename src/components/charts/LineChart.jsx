import React from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

function LineChart({ title, label, labels, values, color }) {
  const data = {
    labels,

    datasets: [
      {
        label,
        data: values,
        borderColor: color,
        tension: 0.4,
      },
    ],
  };
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <Line data={data} />
    </div>
  );
}

export default LineChart;
