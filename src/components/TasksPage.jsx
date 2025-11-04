import { useState } from "react";

// Seed some starter tasks (copied from Dashboard)
const seedTasks = [
  {
    id: 1,
    title: "Login page with OAuth2",
    description:
      "Build a responsive login page and integrate Google/GitHub OAuth. Connect to backend token exchange. Add basic tests.",
    assignee: "",
    status: "Open",
  },
  {
    id: 2,
    title: "Task detail drawer UI",
    description:
      "Create the right-side drawer for task details with Estimate with AI button and result card.",
    assignee: "",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Analytics overview widget",
    description:
      "Show total estimated hours, average difficulty, and team load distribution.",
    assignee: "",
    status: "Open",
  },
];

// List of possible team members
const teamMembers = ["Harris", "Madiha", "Alex", "Sana"];

export default function TasksPage() {
  // Local state to track all tasks
  const [tasks, setTasks] = useState(seedTasks);

  // Function to handle assigning a user
  const handleAssign = (taskId, newAssignee) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === taskId ? { ...t, assignee: newAssignee } : t
      )
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">All Tasks</h1>
      <p className="text-gray-400 text-sm mb-6">
        Assign tasks to team members manually.
      </p>

      {/* Task Table */}
      <div className="rounded-lg border border-gray-800 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-800/70">
            <tr className="text-gray-300 text-sm">
              <th className="px-4 py-3">Task</th>
              <th className="px-4 py-3">Description</th>
              <th className="px-4 py-3">Assign To</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {tasks.map((t) => (
              <tr key={t.id} className="hover:bg-gray-800/40 transition">
                <td className="px-4 py-3 font-medium">{t.title}</td>
                <td className="px-4 py-3 text-sm text-gray-400">
                  {t.description}
                </td>

                {/* Assignment Dropdown */}
                <td className="px-4 py-3">
                  <select
                    value={t.assignee}
                    onChange={(e) => handleAssign(t.id, e.target.value)}
                    className="bg-gray-700 text-gray-200 px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Unassigned</option>
                    {teamMembers.map((member) => (
                      <option key={member} value={member}>
                        {member}
                      </option>
                    ))}
                  </select>
                </td>

                {/* Status Badge */}
                <td className="px-4 py-3">
                  <span
                    className={`text-xs px-2 py-1 rounded-md
                      ${t.status === "Open" ? "bg-gray-700 text-gray-200" : ""}
                      ${t.status === "In Progress" ? "bg-blue-700/40 text-blue-200" : ""}
                      ${t.status === "Done" ? "bg-green-700/40 text-green-200" : ""}
                    `}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional: Quick summary */}
      <div className="mt-6 text-sm text-gray-400">
        <strong>Tip:</strong> Changes here are local for now — we’ll connect to a backend soon.
      </div>
    </div>
  );
}
