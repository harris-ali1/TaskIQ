// Import NavLink from react-router-dom for SPA navigation
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  // Function that dynamically sets classes based on active route
  const linkClasses = ({ isActive }) =>
    `
      flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200
      ${
        // Active link — highlighted background + bright text
        isActive
          ? "bg-[#28282B] text-white font-semibold shadow-sm"
          // Inactive link — gray text, highlight on hover
          : "text-[#aaaaaa] hover:bg-[#1a1a1a] hover:text-[#666666]"
      }
    `;

  return (
    // Sidebar container
    <div className="w-64 bg-[#0F0F0F] p-5 flex flex-col gap-6 border-r border-gray-800">
      {/* ========== Navigation links ========== */}
      <nav className="flex flex-col gap-2">
        {/* Each NavLink automatically gets an active state from React Router */}
        <NavLink to="/" className={linkClasses}>
          🏠 Dashboard
        </NavLink>

        <NavLink to="/tasks" className={linkClasses}>
          📋 All Tasks
        </NavLink>

        <NavLink to="/team" className={linkClasses}>
          👥 Team
        </NavLink>

        <NavLink to="/analytics" className={linkClasses}>
          📊 Analytics
        </NavLink>
      </nav>
    </div>
  );
}
