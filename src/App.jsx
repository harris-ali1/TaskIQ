  // App.jsx
  import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
  import { useState } from "react";

  import Sidebar from "./components/Sidebar";
  import Topbar from "./components/Topbar";
  import Dashboard from "./components/Dashboard";

  import TasksPage from "./pages/TasksPage";
  import TeamPage from "./pages/TeamPage";
  import AnalyticsPage from "./pages/AnalyticsPage";
  import ProfilePage from "./pages/ProfilePage";
  import SettingsPage from "./pages/SettingsPage";
  import AuthContainer from "./components/AuthContainer";

  // This component decides whether to show AuthContainer or MainLayout based on the route
  function LayoutRouter() {
    const [sidebarOpen, setSidebarOpen] = useState(false); // sidebar starts closed
    const location = useLocation();

    // Detect whether current route is part of the auth flow
    const isAuthPage =
      location.pathname === "/" ||
      location.pathname === "/login" ||
      location.pathname === "/signup";

    // If we're on the splash/login/signup routes → show AuthContainer only
    if (isAuthPage) {
      return <AuthContainer />;
    }

    // Otherwise → show main app layout (Topbar + Sidebar)
    return (
      <div className="h-screen flex flex-col bg-black text-gray-100">
        {/* Topbar always at the top */}
        <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Below topbar: sidebar + page content */}
        <div className="flex flex-1">
          {sidebarOpen && <Sidebar />}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    );
  }

  // Router wrapper — keeps everything under BrowserRouter properly
  export default function App() {
    return (
      <Router>
        <LayoutRouter />
      </Router>
    );
  }
