import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./components/Dashboard";
import TasksPage from "./pages/TasksPage";
import TeamPage from "./pages/TeamPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  // State to control sidebar visibility
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      {/* Full-page layout */}
      <div className="h-screen flex flex-col bg-black text-gray-100">
        {/* Topbar now gets a prop to control sidebar */}
        <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main content area */}
        <div className="flex flex-1">
          {/* Sidebar — hides on small screens when closed */}
          {sidebarOpen && (
            <Sidebar />
          )}

          {/* Main page content */}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}