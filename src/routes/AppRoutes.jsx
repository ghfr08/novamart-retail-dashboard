import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Analytics from "../pages/Analytics";
import Customers from "../pages/Customers";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
