export default function AnalyticsPage() {
  // Temporary static data to show overall stats
  // Later, you can compute these dynamically from backend data
  const stats = [
    { label: "Total Tasks", value: 42 },
    { label: "Completed", value: 18 },
    { label: "In Progress", value: 12 },
    { label: "Pending", value: 12 },
    { label: "Avg Est. Time", value: "9.3 hrs" },
  ];

  return (
    <div className="p-6">
      {/* Page title */}
      <h1 className="text-2xl font-semibold mb-2">Analytics Dashboard</h1>

      {/* Small subtitle */}
      <p className="text-gray-400 text-sm">
        Team-wide metrics and progress summaries.
      </p>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-gray-800 rounded-lg p-5 text-center shadow-md hover:bg-gray-700/60 transition"
          >
            {/* Large number/value */}
            <div className="text-3xl font-bold text-blue-400">{stat.value}</div>

            {/* Label below */}
            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
