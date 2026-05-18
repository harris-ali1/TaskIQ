// components/AddTaskModal.jsx
// Reusable modal for creating a new task. Call with onClose to dismiss.

import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

const teamMembers = ["Harris", "Madiha", "Alex", "Sana"];

export default function AddTaskModal({ onClose }) {
  const { addTask } = useTaskContext();

  const [form, setForm] = useState({
    title: "",
    description: "",
    assignee: "",
    status: "Open",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return; // basic guard
    addTask(form);
    onClose();
  };

  return (
    // Backdrop — clicking outside closes the modal
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Modal panel — stop click from bubbling to backdrop */}
      <div
        className="bg-[#0F0F0F] border border-gray-800 rounded-lg p-6 w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-5">New Task</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Title */}
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Title *</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Build authentication flow"
              required
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-xs text-gray-400 mb-1 block">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="What needs to be done?"
              rows={3}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {/* Assignee + Status side by side */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-xs text-gray-400 mb-1 block">Assign To</label>
              <select
                name="assignee"
                value={form.assignee}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Unassigned</option>
                {teamMembers.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="text-xs text-gray-400 mb-1 block">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Open</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-400 hover:text-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded-md transition"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}