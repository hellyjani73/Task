// src/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Subscribeapi from "./components/subscribeapi"; // Fix typo: 'componet' -> 'components'

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default route: Redirect to /new-order */}
      <Route path="/" element={<Navigate to="/subscribeapis" />} />

      {/* Your existing routes */}
      <Route path="/new-order" element={<Subscribeapi />} />

      {/* Add more routes here as needed */}
    </Routes>
  );
};

export default AppRoutes;
