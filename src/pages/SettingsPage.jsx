// SettingsPage.jsx
// Manages user preferences, notifications, and account options

import { useState } from "react";

export default function SettingsPage() {
  // Local state placeholders for future functionality
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(false);
  const [compactView, setCompactView] = useState(false);

  return (
    // Page wrapper with consistent padding and spacing
    <div className="p-8 text-gray-100">
      {/* ===== Header ===== */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-1">Settings</h1>
        <p className="text-gray-400 text-sm">
          Manage your preferences, notifications, and account options.
        </p>
      </div>

      {/* ===== Preferences Section ===== */}
      <div className="bg-[#0F0F0F] p-6 rounded-lg border border-gray-800 mb-8">
        <h2 className="text-xl font-medium mb-4">Preferences</h2>

        {/* Default landing page setting */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-300">Default Home View</span>
          <select
            className="bg-[#1a1a1a] border border-gray-700 rounded-md px-2 py-1 text-sm text-gray-200"
            defaultValue="Dashboard"
            onChange={(e) => console.log("Default View:", e.target.value)}
          >
            <option>Dashboard</option>
            <option>All Tasks</option>
            <option>Team</option>
            <option>Analytics</option>
          </select>
        </div>

        {/* Email notification toggle */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-300">Email Notifications</span>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="accent-blue-600 w-5 h-5 cursor-pointer"
          />
        </div>

        {/* In-app notification toggle */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-300">In-App Notifications</span>
          <input
            type="checkbox"
            checked={inAppNotifications}
            onChange={() => setInAppNotifications(!inAppNotifications)}
            className="accent-blue-600 w-5 h-5 cursor-pointer"
          />
        </div>

        {/* Task completion behavior */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-300">After Completing a Task</span>
          <select
            className="bg-[#1a1a1a] border border-gray-700 rounded-md px-2 py-1 text-sm text-gray-200"
            defaultValue="Stay on same page"
            onChange={(e) => console.log("Completion Behavior:", e.target.value)}
          >
            <option>Stay on same page</option>
            <option>Return to Dashboard</option>
            <option>Open next task</option>
          </select>
        </div>

        {/* AI estimation detail level */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-300">AI Estimation Detail Level</span>
          <select
            className="bg-[#1a1a1a] border border-gray-700 rounded-md px-2 py-1 text-sm text-gray-200"
            defaultValue="Standard"
            onChange={(e) => console.log("AI Detail Level:", e.target.value)}
          >
            <option>Standard</option>
            <option>Detailed (slower)</option>
            <option>Quick (short summary)</option>
          </select>
        </div>

        {/* Compact task table toggle */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">Compact Task Table</span>
          <input
            type="checkbox"
            checked={compactView}
            onChange={() => setCompactView(!compactView)}
            className="accent-blue-600 w-5 h-5 cursor-pointer"
          />
        </div>
      </div>

      {/* ===== Account Section ===== */}
      <div className="bg-[#0F0F0F] p-6 rounded-lg border border-gray-800">
        <h2 className="text-xl font-medium mb-4">Account</h2>

        <ul className="text-sm text-gray-300 space-y-3">
          {/* Placeholder account actions for now */}
          <li>
            <button
              onClick={() => console.log("Change password clicked")}
              className="w-full text-left hover:text-blue-400 transition"
            >
              Change Password
            </button>
          </li>

          <li>
            <button
              onClick={() => console.log("Manage integrations clicked")}
              className="w-full text-left hover:text-blue-400 transition"
            >
              Manage Integrations
            </button>
          </li>

          <li>
            <button
              onClick={() => console.log("Sign out clicked")}
              className="w-full text-left text-red-400 hover:text-red-300 transition"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
