import React from "react";
import { customers } from "../../data/customers";

function CustomerTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h2 className="text-lg font-semibold mb-4">Recent Customer</h2>

      <div className="overflow-xauto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="pb-3">Customer</th>
              <th className="pb-3">Email</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-50">
                <td className="py-3">{customer.name}</td>

                <td>{customer.email}</td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      customer.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {customer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerTable;
