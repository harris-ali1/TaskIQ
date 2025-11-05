import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // used for in-app navigation
import { Menu, X } from "lucide-react";

export default function Topbar({ sidebarOpen, setSidebarOpen }) {
  // Controls visibility of the user dropdown menu
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Ref is attached to the dropdown area for detecting clicks outside
  const dropdownRef = useRef(null);

  // React Router navigation function
  const navigate = useNavigate();

  // Effect closes the dropdown if user clicks anywhere outside it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click target is not inside the dropdown area, close the menu
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Attach global mouse-down listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup: remove event listener when component unmounts
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handles click on dropdown items and navigates to appropriate route
  const handleNavigation = (path) => {
    setDropdownOpen(false); // close dropdown when navigating
    navigate(path);         // navigate to the desired route
  };

  return (
    // Main top navigation bar — holds sidebar toggle, search bar, and user section
    <header className="h-16 bg-[#0F0F0F] flex items-center justify-between px-6 border-b border-gray-800 shadow-md sticky top-0 z-50">
      
      {/* ===== Left Section: Sidebar toggle + app name ===== */}
      <div className="flex items-center gap-3">
        {/* Sidebar toggle button (menu icon / close icon) */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)} // toggles sidebar visibility in App.jsx
          className="p-2 rounded-md hover:bg-[#1a1a1a] transition"
        >
          {/* If sidebar is open, show the "X" icon; otherwise show hamburger menu */}
          {sidebarOpen ? (
            <X size={22} className="text-blue-400 transition-transform duration-200 rotate-180" />
          ) : (
            <Menu size={22} className="text-gray-300 hover:text-blue-400 transition-transform duration-200" />
          )}
        </button>

        {/* App title label */}
        <h1 className="text-2xl font-bold text-[#666666] tracking-wide">
          TaskIQ
        </h1>
      </div>

      {/* ===== Middle Section: Search bar ===== */}
      {/* This input is centered horizontally and can later be connected to a filter/search function */}
      <div className="flex justify-center flex-1">
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-[55%] bg-[#2A2A2A] text-[#666666] px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* ===== Right Section: User profile & dropdown ===== */}
      <div className="relative" ref={dropdownRef}> 
        {/* Button that shows user avatar and name — clicking toggles dropdown visibility */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)} // toggles dropdown open/closed
          className="flex items-center gap-2 px-3 py-1 rounded-md transition-all duration-200 hover:bg-[#1a1a1a] hover:text-blue-400"
        >
          {/* Placeholder avatar circle (could be replaced with a profile image) */}
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            H
          </div>
          {/* Display username */}
          <span className="text-gray-200 text-sm">Harris</span>
        </button>

        {/* Conditional rendering: only show dropdown menu when dropdownOpen = true */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-[#1a1a1a] border border-gray-700 rounded-md shadow-lg">
            <ul className="py-1 text-sm text-gray-200">
              {/* Each option calls handleNavigation() with appropriate route */}
              <li>
                <button
                  onClick={() => handleNavigation("/profile")}
                  className="w-full text-left px-4 py-2 hover:bg-blue-600/20 transition"
                >
                  Profile
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleNavigation("/settings")}
                  className="w-full text-left px-4 py-2 hover:bg-blue-600/20 transition"
                >
                  Settings
                </button>
              </li>

              <li>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    console.log("Sign out clicked");
                  }}
                  className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-600/10 transition"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
