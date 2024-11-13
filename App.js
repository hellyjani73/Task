import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import AppRoutes from "./AppRoutes";
import Header from "./Header";

import "./App.css";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className="grid-container">
        {/* Show the entire app (no authentication check) */}
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <main style={{ marginLeft: openSidebarToggle ? "250px" : "0" }}>
          <Routes>
            <Route path="/*" element={<AppRoutes />} />
            <Route path="/" element={<Navigate to="/new-order" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
