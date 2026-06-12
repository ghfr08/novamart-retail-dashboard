import React from "react";
import MainLayout from "../components/layout/MainLayout";
import StatCard from "../components/ui/StatCard";
import SalesChart from "../components/charts/SalesChart";
import ProductTable from "../components/tables/ProductTable";
import CustomerTable from "../components/tables/CustomerTable";
import ActivityFeed from "../components/dashboard/ActivityFeed";

function Dashboard() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard title="Total Revenue" value="$128,450" change="+12.5%" />
          <StatCard title="Total Orders" value="2,847" change="+8.2%" />
          <StatCard title="Customers" value="1,240" change="+15.3%" />
          <StatCard title="Growth Rate" value="24%" change="+4.1%" />
        </div>

        {/* Sales Chart */}
        <SalesChart />

        {/* Table */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <ProductTable />
          <CustomerTable />
        </div>

        {/* Activity Feeds */}
        <ActivityFeed />
      </div>
    </MainLayout>
  );
}

export default Dashboard;
