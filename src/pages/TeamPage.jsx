export default function TeamPage() {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-2">Team Overview</h1>

      {/* Short description text */}
      <p className="text-gray-400 text-sm">
        This section will show team members, roles, and workloads.
      </p>

      {/* Grid of team members (example placeholders for now) */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Map through an array of example names to render cards */}
        {["Harris", "Madiha", "Alex", "Sana"].map((name) => (
          <div
            key={name}
            className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center"
          >
            {/* Profile circle with first initial */}
            <div className="bg-blue-600 w-12 h-12 flex items-center justify-center rounded-full text-white text-lg font-semibold mb-2">
              {name[0]}
            </div>

            {/* Member name and placeholder role */}
            <div className="font-medium">{name}</div>
            <div className="text-xs text-gray-400">Developer</div>
          </div>
        ))}
      </div>
    </div>
  );
}
