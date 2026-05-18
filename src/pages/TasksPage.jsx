// TasksPage.jsx — now reads/writes tasks from shared TaskContext
import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import AddTaskModal from "../components/AddTaskModal";

const teamMembers = ["Harris", "Madiha", "Alex", "Sana"];
const statuses = ["Open", "In Progress", "Done"];

export default function TasksPage() {
  const { tasks, assignTask, updateStatus } = useTaskContext();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      {showModal && <AddTaskModal onClose={() => setShowModal(false)} />}

      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-semibold">All Tasks</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-md transition"
        >
          + New Task
        </button>
      </div>
      <p className="text-gray-400 text-sm mb-6">
        Assign tasks and update statuses. Changes are reflected everywhere instantly.
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

                {/* Assignment Dropdown — calls shared assignTask() */}
                <td className="px-4 py-3">
                  <select
                    value={t.assignee}
                    onChange={(e) => assignTask(t.id, e.target.value)}
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

                {/* Status Dropdown — calls shared updateStatus() */}
                <td className="px-4 py-3">
                  <select
                    value={t.status}
                    onChange={(e) => updateStatus(t.id, e.target.value)}
                    className={`text-xs px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                      ${t.status === "Open" ? "bg-gray-700 text-gray-200" : ""}
                      ${t.status === "In Progress" ? "bg-blue-700/40 text-blue-200" : ""}
                      ${t.status === "Done" ? "bg-green-700/40 text-green-200" : ""}
                    `}
                  >
                    {statuses.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 text-sm text-gray-400">
        <strong>Tip:</strong> Assignments and status changes now sync with the Dashboard in real time.
      </div>
    </div>
  );
}