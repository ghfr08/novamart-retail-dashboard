import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import { customers } from "../data/customers";
import StatCard from "../components/ui/StatCard";

function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const totalCustomers = customers.length;

  const activeCustomers = customers.filter(
    (customer) => customer.status === "Active",
  ).length;

  const inactiveCustomers = customers.filter(
    (customer) => customer.status === "Inactive",
  ).length;

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" || customer.status === selectedStatus;

    return matchesSearch & matchesStatus;
  });

  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Customer Management</h1>

        <div className="grid grid-cols-1 md:grind-cols-3 gap-6">
          <StatCard
            title="Total Customers"
            value={totalCustomers}
            change="All Registered Users"
          />
          <StatCard
            title="Active Customers"
            value={activeCustomers}
            change="Currently Active"
          />
          <StatCard
            title="Inactive Customers"
            value={inactiveCustomers}
            change="Needs Attention"
          />

          <div>
            <input
              type="text"
              placeholder="Search Customers..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="border rounded-lg px-4 py-2 w-full md:w-80"
            />

            <select
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
              className="border rounded-lg px-4 py-2"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h2 className="text-lg font-semibold mb-4">Customer Directory</h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="pb-3">Name</th>
                      <th className="pb-3">Email</th>
                      <th className="pb-3">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredCustomers.length > 0 ? (
                      filteredCustomers.map((customer) => (
                        <tr
                          key={customer.id}
                          className="border-b hover:bg-gray-50"
                        >
                          <td className="py-3">{customer.name}</td>
                          <td>{customer.email}</td>
                          <td>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${customer.status === "Active" ? "bg-green-100 text-green=700" : "bg-red-100 text-red-700"}`}
                            >
                              {customer.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="3"
                          className="text-center py-6 text-gray-500"
                        >
                          No Customers Found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Customers;
