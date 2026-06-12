import React from "react";

import {
  BarChart3,
  LayoutDashboard,
  Package,
  Settings,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Customers",
      path: "/customers",
      icon: <Users size={20} />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <Package size={20} />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-blue-400">InsightFlow</h1>
        <p className="text-sm text-gray-400">NovaMart Retail</p>
      </div>

      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${isActive ? "bg-blue-500 text-white" : "text-gray-300 hover:bg-gray-800"}`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
