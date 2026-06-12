import React from "react";

function StatusBadge({ type }) {
  const styles = {
    success: "bg-green-100 text-green 700",
    warning: "bg-yellow-100 text-yellow-700",
    info: "bg-blue-100 text-blue-700",
    error: "bg-red-100 text-red-700",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${styles[type] || "bg-gray-100 text-gray-700"}`}
    >
      {type}
    </span>
  );
}

export default StatusBadge;
