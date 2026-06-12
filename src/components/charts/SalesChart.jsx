import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
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

function SalesChart() {
  const data = {
    labels: ["jan", "Feb", "Mar", "Apr", "May", "June"],

    datasets: [
      {
        label: "Revenue",
        data: [12000, 18000, 15000, 24000, 22000, 28000],
        borderColor: "#3B82F6",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>

      <Line data={data} />
    </div>
  );
}

export default SalesChart;
