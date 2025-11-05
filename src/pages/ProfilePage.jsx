// ProfilePage.jsx
// Displays user identity details and recent activity summary

export default function ProfilePage() {
  return (
    // Page wrapper with consistent padding and spacing
    <div className="p-8 text-gray-100">
      {/* ===== Header: avatar, name, and role ===== */}
      <div className="flex items-center gap-6 mb-10">
        {/* Placeholder avatar - can be replaced with user-uploaded image */}
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full border border-gray-700"
        />

        {/* User info summary */}
        <div>
          <h1 className="text-3xl font-semibold">Harris Khan</h1>
          <p className="text-gray-400 text-sm">Software Engineer — Team TaskIQ</p>
          <button
            className="mt-3 px-3 py-1 text-sm bg-blue-600 rounded-md hover:bg-blue-500 transition"
            onClick={() => console.log("Edit profile clicked")}
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* ===== Personal Information Section ===== */}
      <div className="bg-[#0F0F0F] p-6 rounded-lg border border-gray-800 mb-8">
        <h2 className="text-xl font-medium mb-4">Personal Information</h2>
        <ul className="text-sm text-gray-300 space-y-2">
          <li><strong>Email:</strong> harris@uh.edu</li>
          <li><strong>Role:</strong> Developer</li>
          <li><strong>Member Since:</strong> January 2025</li>
          <li><strong>Department:</strong> Product Engineering</li>
        </ul>
      </div>

      {/* ===== Recent Activity Section ===== */}
      <div className="bg-[#0F0F0F] p-6 rounded-lg border border-gray-800">
        <h2 className="text-xl font-medium mb-4">Recent Activity</h2>
        <ul className="text-sm text-gray-300 space-y-2">
          <li>✔ Completed: Login page with OAuth2</li>
          <li>⚙ In Progress: Analytics overview widget</li>
          <li>📋 Assigned: Task detail drawer UI</li>
        </ul>
      </div>
    </div>
  );
}
