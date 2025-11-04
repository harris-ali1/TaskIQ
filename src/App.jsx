// Import router tools for navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

// Import pages
import Dashboard from "./components/Dashboard";
import TasksPage from "./components/TasksPage";
import TeamPage from "./components/TeamPage";
import AnalyticsPage from "./components/AnalyticsPage";

export default function App() {
  return (
    // The Router wraps the entire app to handle page navigation without reloads
    <Router>
      {/* The overall layout of the app */}
      {/* Full height of the screen, vertical layout, dark background */}
      <div className="h-screen flex flex-col bg-black text-gray-100">
        
        {/* ============= Topbar ============= */}
        {/* The top header now spans the full width of the app */}
        <Topbar />

        {/* ============= Main Section ============= */}
        {/* Everything below the topbar (Sidebar + Page content) */}
        <div className="flex flex-1">
          
          {/* Sidebar appears on the left, contains navigation links */}
          <Sidebar />

          {/* Main content area on the right */}
          {/* This area changes based on the current route */}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              {/* "/" route → Dashboard */}
              <Route path="/" element={<Dashboard />} />

              {/* "/tasks" route → Manual assignment page */}
              <Route path="/tasks" element={<TasksPage />} />

              {/* "/team" route → Team overview page */}
              <Route path="/team" element={<TeamPage />} />

              {/* "/analytics" route → Analytics stats page */}
              <Route path="/analytics" element={<AnalyticsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
