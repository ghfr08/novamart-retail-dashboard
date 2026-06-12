import React from "react";
import { useState, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import StatCard from "../components/ui/StatCard";
import {
  revenueData,
  orderData,
  customerGrowthData,
} from "../data/AnalyticsData";
import LineChart from "../components/charts/LineChart";

function Analytics() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const shouldFail = false;

      if (shouldFail) {
        setError("Failed to load analytics data.");
      }

      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-96">
          <p className="text-lg font-medium">Loading Analytics...</p>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>

            <p className="text-gray-500">{error}</p>
          </div>
        </div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Analytics</h1>

        <div className="grid grid-cols-1 md:grid-cold-3 gap-6">
          <StatCard title="Revenue" value="128,450" change="+12.5%" />
          <StatCard title="Orders" value="2,487" change="+8.2%" />
          <StatCard title="Customers" value="1,240" change="+15.3%" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <LineChart
            title="Revenue Trend"
            label="Revenue"
            labels={revenueData.labels}
            values={revenueData.values}
            color="#3B82F6"
          />
          <LineChart
            title="Orders Trend"
            label="Orders"
            labels={orderData.labels}
            values={orderData.values}
            color="#10B981"
          />
        </div>
        <LineChart
          title="Customer Growth"
          label="Customers"
          labels={customerGrowthData.labels}
          values={customerGrowthData.values}
          color="#8B5CF6"
        />
      </div>
    </MainLayout>
  );
}

export default Analytics;
