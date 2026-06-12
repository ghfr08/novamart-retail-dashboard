import React from "react";

function StatCard({ title, value, change }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
      <p className="text-green-600 font-medium mt-2">{change}</p>
    </div>
  );
}

export default StatCard;
