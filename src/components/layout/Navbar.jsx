import { Bell, Moon, Search, Sun } from "lucide-react";
import React from "react";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className={`h-16 border-b flex items-center justify-between px-6
    ${
      theme === "dark"
        ? "bg-gray-800 text-white border-gray-700"
        : "bg-white text-black border-gray-200"
    }`}
    >
      <h2 className="text-xl font-semibold">InsightFlow Dashboard</h2>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
          <Search size={18} />
          <input type="text" placeholder="Search..." className="outline-none" />
        </div>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <Bell size={20} />

        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          A
        </div>
      </div>
    </header>
  );
}

export default Navbar;
